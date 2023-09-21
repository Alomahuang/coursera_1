const fetchAPI = (date) => {
  let result = [];
  // let split = date.split("-");
  // let day = split[2];

  let random = Math.random();

  if (random < 0.5) {
    for (let i = 17; i <= 23; ) {
      result.push(i + ":00");
      i++;
    }
  }
  if (random > 0.5) {
    for (let i = 17; i <= 23; ) {
      result.push(i + ":30");
      i++;
    }
  }
  return result;
};

const submitAPI = (formData) => true;

export { fetchAPI, submitAPI };
