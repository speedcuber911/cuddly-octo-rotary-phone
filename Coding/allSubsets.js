function genUtil(A, ans, curr, index) {
  ans.push(curr);
  for (let i = index; i < A.length; i++) {
    curr.push(A[i]);
    genUtil(A, ans, [...curr], i + 1);
    curr.pop();
  }
  return;
}
function gen(A) {
  const ans = [];
  genUtil(A, ans, [], 0);
}

gen([1, 2, 3]);
