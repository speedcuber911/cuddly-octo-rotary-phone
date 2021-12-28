function deepClone2(obj) {
  return Object.keys(obj).reduce((clonedObj, key) => {
    if (typeof obj[key] === "object")
      return { ...clonedObj, [key]: deepClone(obj[key]) };
    return { ...clonedObj, [key]: obj[key] };
  }, {});
}

obli = { a: 1, b: { c: 1, d: { e: 1 } }  };

obli2 = deepClone(obli);
