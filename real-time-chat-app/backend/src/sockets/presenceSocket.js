import User from "../models/User.js";
import {
  addOnlineUser,
  removeOnlineUser
} from "../services/socketService.js";
import { SOCKET_EVENTS } from "../utils/constants.js";

const registerPresenceSocket = (io, socket) => {
  socket.on("register_user", async (userId) => {
    try {
      socket.userId = userId;

      addOnlineUser(userId, socket.id);

      await User.findByIdAndUpdate(userId, {
        isOnline: true,
        socketId: socket.id
      });

      io.emit(SOCKET_EVENTS.USER_ONLINE, {
        userId
      });
    } catch (error) {
      console.error(error.message);
    }
  });

  socket.on("disconnect", async () => {
    try {
      if (!socket.userId) return;

      removeOnlineUser(socket.userId);

      await User.findByIdAndUpdate(socket.userId, {
        isOnline: false,
        lastSeen: new Date(),
        socketId: null
      });

      io.emit(SOCKET_EVENTS.USER_OFFLINE, {
        userId: socket.userId
      });
    } catch (error) {
      console.error(error.message);
    }
  });
};

export default registerPresenceSocket;