function deepClone(Obj) {
  const cloneObj = { ...Obj };
  return Object.keys(cloneObj).reduce((acc, key) => {
    if (typeof cloneObj[key] === "object")
      return { ...acc, [key]: deepClone(cloneObj[key]) };
    return { ...acc, [key]: cloneObj[key] };
  }, {});
}

const r = { a: 1, b: { c: 3, d: { x: 24, y: 25 } } };

const _r = deepClone(r);

console.log(r, _r);

Object.keys(r).forEach((item, i) => {
  if (typeof r[item] === "object") {
    if (r[item] == _r[item]) console.log("Damn", item);
    if (r[item] === _r[item]) console.log("Damn2", item);
  }
});
