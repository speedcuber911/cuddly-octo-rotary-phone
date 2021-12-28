function exploreInRange(A, B, i) {
  const queue = [i];
  const ans = [];
  while (true) {
    const top = queue.shift();

    // console.log({top});
    if (top > B) break;
    if (top >= A && top <= B) ans.push(parseInt(top));

    if (top == 0 || top > B) continue;

    const lastDigit = top % 10;
    const stepA = top * 10 + (lastDigit - 1);
    const stepB = top * 10 + (lastDigit + 1);

    if (lastDigit == 9) queue.push(stepA);
    else if (lastDigit == 0) queue.push(stepB);
    else {
      queue.push(stepA);
      queue.push(stepB);
    }
  }
  console.log({ i, ans });
  return ans;
}

function solveFaster(A, B) {
  let ans = [];
  for (let i = 1; i <= 9; i++) {
    ans.push(...exploreInRange(A, B, i));
  }
  if (A == 0) ans.push(0);

  return [...new Set(ans.sort((a, b) => a - b))];
}

module.exports = {
  //param A : integer
  //param B : integer
  //return a array of integers
  stepnum: function (A, B) {
    return solveFaster(A, B);
  },
};

console.log(solveFaster(1, 100));
