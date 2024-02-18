function plusMinus(arr) {
  let positiveValues = 0;
  let negativeValues = 0;
  let zeroValues = 0;

  for (let num of arr) {
    if (num > 0) {
      positiveValues++;
    } else if (num < 0) {
      negativeValues++;
    } else {
      zeroValues++;
    }
  }

  console.log((positiveValues / arr.length).toFixed(6));
  console.log((negativeValues / arr.length).toFixed(6));
  console.log((zeroValues / arr.length).toFixed(6));
}
