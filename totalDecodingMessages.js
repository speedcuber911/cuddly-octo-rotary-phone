"126";

// [1,2,3]

// "9480"
const ans = [...new Array(str.length)].map( el => 0);
function solve(str) {
  if (parseInt(str[0]) < 3) ans[0] = 1;
  for (let i = 1; i < str.length; i++) {
    const prev = str[i - 1];
    if (parseInt(prev + str[i]) < 27) ans[i] = ans[i - 1] + 1;
  }
  return ans[str.length - 1];
}
//2 "123"
//2 "23"
//1 "3"

//"123" "4"

//Tn = Tn-1 +1
