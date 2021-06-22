var sumEvenAfterQueries = function (nums, queries) {
  let preCalc = nums.reduce((acc, el) => {
    const ans = el % 2 == 0 ? el : 0;
    return acc + ans;
  }, 0);

  return queries.map((query) => {
    const [toAdd, index] = query;
    let prevVal = nums[index];
    nums[index] += toAdd;
    let newVal = nums[index];
    if (prevVal % 2 == 0) {
      if (newVal % 2 == 0) preCalc += newVal - prevVal;
      else preCalc -= prevVal;
    } else {
      if (newVal % 2 == 0) preCalc += newVal;
    }
    console.log(nums, preCalc);
    return preCalc;
  });
};

const arr = [1, 2, 3, 4];
const queries = [
  [1, 0],
  [-3, 1],
  [-4, 0],
  [2, 3],
];
sumEvenAfterQueries(arr, queries);
