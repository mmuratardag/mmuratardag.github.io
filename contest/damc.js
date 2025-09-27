const doHomework = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("The dog ate my code");
    }, 99999999);
  });
};