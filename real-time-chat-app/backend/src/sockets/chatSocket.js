import Message from "../models/Message.js";
import chatService from "../services/chatService.js";
import { getOnlineUserSocket } from "../services/socketService.js";
import { SOCKET_EVENTS } from "../utils/constants.js";

const registerChatSocket = (io, socket) => {
  socket.on(SOCKET_EVENTS.JOIN_ROOM, (roomId) => {
    socket.join(roomId);
  });

  socket.on(SOCKET_EVENTS.LEAVE_ROOM, (roomId) => {
    socket.leave(roomId);
  });

  socket.on(SOCKET_EVENTS.SEND_MESSAGE, async (payload) => {
    try {
      const formattedMessage = chatService.formatMessage(payload);

      const savedMessage = await Message.create({
        sender: payload.sender,
        recipient: payload.recipient || null,
        room: payload.room || null,
        content: payload.content,
        messageType: payload.messageType || "text"
      });

      if (payload.room) {
        io.to(payload.room).emit(
          SOCKET_EVENTS.RECEIVE_MESSAGE,
          {
            ...formattedMessage,
            _id: savedMessage._id
          }
        );
      }

      if (payload.recipient) {
        const recipientSocket = getOnlineUserSocket(
          payload.recipient
        );

        if (recipientSocket) {
          io.to(recipientSocket).emit(
            SOCKET_EVENTS.RECEIVE_MESSAGE,
            {
              ...formattedMessage,
              _id: savedMessage._id
            }
          );
        }

        socket.emit(
          SOCKET_EVENTS.RECEIVE_MESSAGE,
          {
            ...formattedMessage,
            _id: savedMessage._id
          }
        );
      }
    } catch (error) {
      console.error("Message socket error:", error.message);
    }
  });

  socket.on(SOCKET_EVENTS.READ_RECEIPT, async (data) => {
    try {
      await Message.findByIdAndUpdate(
        data.messageId,
        {
          $addToSet: {
            readBy: data.userId
          }
        }
      );

      if (data.senderSocketId) {
        io.to(data.senderSocketId).emit(
          SOCKET_EVENTS.READ_RECEIPT,
          data
        );
      }
    } catch (error) {
      console.error("Read receipt error:", error.message);
    }
  });
};

export default registerChatSocket;