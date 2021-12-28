const arr = [1];
let two = 2,
  three = 2,
  five = 2 ;

const calc = (two, three, five) => 2 ** two * 3 ** three * 5 ** five;
let init = calc(two, three, five);
while (arr.length < 10) {
  let from2 = calc(two + 1, three, five);
  let from3 = calc(two, three + 1, five);
  let from5 = calc(two, three, five + 1);
  console.log({ from2, from3, from5 });
  let mini = Math.min(from2, from3, from5);
  if (mini == from2) {
    arr.push(from2);
    two++;
  }
  if (mini == from3) {
    arr.push(from3);
    three++;
  }
  if (mini == from5) {
    arr.push(from5);//
    five++;
  }
}

console.log(arr);
