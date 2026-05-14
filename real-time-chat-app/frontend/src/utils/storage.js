export const getToken = () =>
  localStorage.getItem("chat_token");

export const clearToken = () =>
  localStorage.removeItem("chat_token");