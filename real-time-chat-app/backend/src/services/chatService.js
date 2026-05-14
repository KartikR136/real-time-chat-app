const chatService = {
  formatMessage(payload) {
    return {
      ...payload,
      deliveredAt: new Date()
    };
  }
};

export default chatService;