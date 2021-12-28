function fibSum(A) {
  if(A == 1 || A == 0)
    return A;
  const fibArr = [0, 1];
  while (fibArr[fibArr.length - 1] < A)
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  fibArr.pop();
  console.log(fibArr);
  let i = fibArr.length - 1;
  let numbers = 0;
  while (A) {
    while (A >= fibArr[i]) {
      A -= fibArr[i];
    }
    numbers++;
    i--;
  }
  console.log(numbers);
  return numbers;
}

fibSum(3);
