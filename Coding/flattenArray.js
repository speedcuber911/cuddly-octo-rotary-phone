function flattenDepth(arr, d = 1) {
  if (d <= 0) return arr;
  return arr.reduce((acc, el) => {
    return Array.isArray(el)
      ? [...acc, ...flattenDepth(el, d - 1)]
      : [...acc, el];
  }, []);
}

function flatten(arr) {
  const ans = [];
  const stack = [...arr];
  while (stack.length) {
    const last = stack.pop();
    if (Array.isArray(last)) stack.push(...last);
    else {
      ans.push(last);
    }
  }
  console.log(ans);
  return ans.reverse();
}

function flatUtil(arr) {
  console.log({ arr });
  [...new Array(4)].map((val, i) => {
    console.log("At Depth:" + (i + 1), flattenDepth(arr, i + 1));
  });
}

const arr2 = [0, 1, 2, [[[3, 4]]]];
const arr1 = [0, 1, 2, [3, 4]];
const arr3 = [1, 2, [3, 4, [5, 6] ] ];

flatUtil(arr3);
