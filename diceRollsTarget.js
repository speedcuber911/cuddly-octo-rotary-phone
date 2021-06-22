function solN(d, f, target, tab) {
  if (d == 0 && target == 0) return 1;
  if(target<0)
    console.log("BOOM");
  if (d == 0) return 0;
  if (tab[d][f]) {
    return tab[d][f];
  }
  let t = 0;
  for (let i = 1; i <= f; i++) {
    if (d < target && target <= d * f && target >= i) {
      t += solN(d - 1, f, target - i, tab);
      t %= 1000000007;
    }
  }
  tab[d][f] = t;
  return tab[d][f];
}
var numRollsToTarget = function (d, f, target) {
  let tab = [...new Array(d + 1)].map((row) =>
    [...new Array(f + 1)].map((el) => null)
  );
  return solN(d, f, target, tab);
};

console.log(numRollsToTarget(30, 30, 500));
