
//sum of first four natural numbers using call back function


function sumOfNumbersCallback(callback) {
    let sum = 0;
    for (let i = 1; i <= 4; i++) {
      sum += i;
    }
    callback(sum);
  }
  
  sumOfNumbersCallback((result) => {
    console.log("Sum of the first 4 natural numbers:", result);
  });
  