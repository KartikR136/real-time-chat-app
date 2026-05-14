const authService = {
  validateRegistration(data) {
    return !!(
      data.username &&
      data.email &&
      data.password
    );
  }
};

export default authService;