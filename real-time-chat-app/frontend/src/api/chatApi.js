import api from "./axios";

export const fetchRooms = () =>
  api.get("/chat/rooms");

export const fetchRoomMessages = (roomId) =>
  api.get(`/chat/rooms/${roomId}/messages`);

export const fetchPrivateMessages = (userId) =>
  api.get(`/chat/private/${userId}`);

export const fetchUsers = () =>
  api.get("/users");

export const searchUsers = (query) =>
  api.get(`/users/search?q=${query}`);