/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let duplicatesNum = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        break;
      } else {
        duplicatesNum++;
      }
    }
    nums.splice(i, duplicatesNum - 1);
  }

  return nums.length;
};
