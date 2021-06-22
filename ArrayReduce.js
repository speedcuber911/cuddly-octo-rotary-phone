Array.prototype.reduce = (Fn, initialValue) => {
  let acc = initialValue || this[0];

  this.forEach((item, i) => {
    acc = Fn(acc, item, this, i);
  });
  return acc;
};

a = [1, 2, 3, 4, 5];

a.reduce((acc, el, a, i) => {}, 0);
