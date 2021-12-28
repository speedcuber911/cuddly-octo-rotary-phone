function adder(a, b) {
  if (arguments.length === 2) {
    return a + b;
  }
  return (b) => a + b;
}
console.log(adder(1, 2));

console.log(adder(1)(2));
