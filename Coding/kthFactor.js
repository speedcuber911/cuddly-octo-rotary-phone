function allFactors(n, factorMap) {
  // console.log({ n });
  if (n == 1) return;
  if (factorMap[n]) return;
  else {
    for (let i = n; i > 0; i--) {
      if (n % i == 0) {
        factorMap[i] = 1;
        allFactors(i, factorMap);
      }
    }
  }
}

var kthFactor = function (n, k) {
  const factorMap = [...new Array(n + 1)].map((el) => 0);
  factorMap[1] = 1;
  allFactors(n, factorMap);
  factorMap.map((el, i) => el && i).filter(Boolean)[k - 1];
};

kthFactor(128, 3);
