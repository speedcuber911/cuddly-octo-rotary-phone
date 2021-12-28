function solve(A, B) {
  let aL = A.length;
  let bL = B.length;
  let diff = Math.abs(aL - bL);
  let zeroString = [...new Array(diff)].map((el) => "0").join("");
  if (aL > bL) {
    B = zeroString + B;
  }
  if (bL > aL) {
    A = zeroString + A;
  }
  // console.log({ A, B });
  let carry = 0;
  let resS = [...new Array(aL)].map((el) => "0");
  let result;
  for (let i = A.length-1; i >= 0; i--) {
    result = parseInt(A[i]) + parseInt(B[i]) + parseInt(carry);
    carry = 0;
    if (result == 1) {
      resS[i] = "1";
    }
    if (result == 2) {
      resS[i] = "0";
      carry = 1;
    }
    if (result == 3) {
      resS[i] = "1";
      carry = 1;
    }
  }
  resS = resS.join("");
  if (carry) {
    resS = "1" + resS;
  }
  // console.log(resS);
  return resS;
}

solve("1010110111001101101000", "1000011011000000111100110");
