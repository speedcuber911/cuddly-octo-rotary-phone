function solve(arr) {
  const ans = new Array(arr.length);
  const stack = [0];
  for (let i = 1; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      const top = stack.pop();
      ans[top] = arr[i];
    }
    stack.push(i);
  }
  while (stack.length) {
    ans[stack.pop()] = -1;
  }
  return ans;
}

console.log([7, 7, 10, 10, 9, 5, 2, 8] ,solve([7, 7, 10, 10, 9, 5, 2, 8]));
