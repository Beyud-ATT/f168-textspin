function maskString(username) {
  if (username.length <= 3) {
    return username;
  }
  return username.substring(0, 3) + "***";
}

export { maskString };
