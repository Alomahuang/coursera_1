function isEmailValid(email) {
  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return true;
  } else {
    return false;
  }
}

export { isEmailValid };
