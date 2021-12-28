function nextPermutation(A) {
  // console.log({ A });
  let point;
  let i = A.length - 1;
  for (i; i > 0; i--) {
    if (A[i - 1] < A[i]) {
      point = i;
      break;
    }
  }
  if (!point) return false;
  let fp;
  for (i = A.length; i > point - 1; i--) {
    if (A[i] > A[point - 1]) {
      fp = i;
      break;
    }
  }
  let temp = A[fp];
  A[fp] = A[point - 1];
  A[point - 1] = temp;

  const arrN = A.slice(point);
  arrN.sort((a, b) => a - b);

  return [...A.slice(0, point), ...arrN];
}
function callee(A) {
  let ans = [[...A]];
  while (nextPermutation([...A])) {
    const B = nextPermutation([...A]);
    if (B) ans.push(B);
    A = B;
  }
return (ans);
}
