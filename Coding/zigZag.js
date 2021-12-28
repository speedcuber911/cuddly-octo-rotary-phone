function createTable(row, col) {
  const arrNatural = [...new Array(row * col)].map((_, i) => i + 1);
  let alterNate = -1;
  const solN = [];

  for (let i = 0; i < col; i++) {
    const startAt = i * row;
    const endAt = startAt + row;
    const colN = arrNatural.slice(startAt, endAt);
    if (alterNate === -1) {
      solN.push(colN);
      alterNate *= -1;
    } else {
      solN.push(colN.reverse());
      alterNate *= -1;
    }
  }
  console.log(solN);
  for (let i = 0; i < row; i++) {
    const colV = [];
    for (let j = 0; j < col; j++) {
      colV.push(solN[j][i]);
    }
    console.log(colV.join(" "));
  }
}

createTable(4, 5);
