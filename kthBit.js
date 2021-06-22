const strings = ["0"];
let n = 20;
for (let i = 1; i <= n; i++) {
  strings.push(
    strings[i - 1] +
      "1" +
      strings[i - 1]
        .split("")
        .map((el) => {
          if (el == "1") return "0";
          return "1";
        })
        .reverse()
        .join("")
  );
}

var findKthBit = function (n, k) {  
  return strings[n - 1][k - 1];
};

findKthBit(20, 1000);
