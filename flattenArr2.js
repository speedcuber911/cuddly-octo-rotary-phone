//without depth control
const arr = [1, [[[[[2]]]]], [3], [4, 5], [6, [7, 8, 9]]];
function flatterArr(arr) {
  const ans = [];
  const stack = [...arr];
  while (stack.length) {
    const top = stack.pop();
    if (Array.isArray(top)) stack.push(...top);
    else {
      ans.push(top);
    }
  }
  return ans.reverse();
}
console.log(flatterArr(arr));

function flattenWithDepthControl(arr, depth = 1) {
  if (depth === 0) return arr;
  return arr.reduce((flatArr, el) => {
    if (Array.isArray(el))
      return [...flatArr, ...flattenWithDepthControl(el, depth - 1)];
    return [...flatArr, el];
  }, []);
}
