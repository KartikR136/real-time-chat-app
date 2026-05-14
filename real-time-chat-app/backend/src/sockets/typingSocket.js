import { SOCKET_EVENTS } from "../utils/constants.js";

const registerTypingSocket = (io, socket) => {
  socket.on(SOCKET_EVENTS.USER_TYPING, (payload) => {
    if (payload.room) {
      socket.to(payload.room).emit(
        SOCKET_EVENTS.USER_TYPING,
        payload
      );
    }

    if (payload.recipientSocketId) {
      io.to(payload.recipientSocketId).emit(
        SOCKET_EVENTS.USER_TYPING,
        payload
      );
    }
  });

  socket.on(SOCKET_EVENTS.STOP_TYPING, (payload) => {
    if (payload.room) {
      socket.to(payload.room).emit(
        SOCKET_EVENTS.STOP_TYPING,
        payload
      );
    }

    if (payload.recipientSocketId) {
      io.to(payload.recipientSocketId).emit(
        SOCKET_EVENTS.STOP_TYPING,
        payload
      );
    }
  });
};

export default registerTypingSocket;