//sum of first four natural numbers using promises

function sumofnumbers() {
    return new Promise((resolve, reject) => {
      let sum = 0;
      for (let i = 1; i <= 4; i++) {
        sum += i;
      }
      resolve(sum);
    });
  }
  
  sumofnumbers()
    .then((result) => {
      console.log("Sum of the first 4 natural numbers:", result);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
  