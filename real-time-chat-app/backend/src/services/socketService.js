const onlineUsers = new Map();

export const addOnlineUser = (userId, socketId) => {
  onlineUsers.set(userId, socketId);
};

export const removeOnlineUser = (userId) => {
  onlineUsers.delete(userId);
};

export const getOnlineUserSocket = (userId) => {
  return onlineUsers.get(userId);
};

export default onlineUsers;