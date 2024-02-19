function minMaxSum(arr) {
  const sums = [];

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;

    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }

      currentSum += arr[j];
    }

    sums.push(currentSum);
  }

  // Find the min and max sum
  let minSum = sums[0];
  let maxSum = sums[0];

  for (let sum of sums) {
    if (sum > maxSum) {
      maxSum = sum;
    }

    if (sum < minSum) {
      minSum = sum;
    }
  }

  console.log(minSum, maxSum);
}
