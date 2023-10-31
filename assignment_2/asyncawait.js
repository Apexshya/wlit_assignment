async function sumOfNumbersAsyncAwait() {
    let sum = 0;
    for (let i = 1; i <= 4; i++) {
      sum += i;
    }
    return sum;
  }
  
  (async () => {
    try {
      const result = await sumOfNumbersAsyncAwait();
      console.log("Sum of the first 4 natural numbers:", result);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  })();
  