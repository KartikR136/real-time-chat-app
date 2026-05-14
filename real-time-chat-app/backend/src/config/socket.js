import { Server } from "socket.io";
import env from "./env.js";

import registerChatSocket from "../sockets/chatSocket.js";
import registerPresenceSocket from "../sockets/presenceSocket.js";
import registerTypingSocket from "../sockets/typingSocket.js";

let io;

export const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: env.clientUrl,
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    registerChatSocket(io, socket);
    registerPresenceSocket(io, socket);
    registerTypingSocket(io, socket);

    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });

  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error("Socket server not initialized");
  }

  return io;
};