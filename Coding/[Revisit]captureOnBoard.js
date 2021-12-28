function isMoveInBounds(A, i, j) {
  const rows = A.length;
  const cols = A[0].length;
  if (i < 0 || j < 0 || i >= rows || j >= cols) return false;
  return true;
}
function floodFill(A, i, j, oldVal, withVal) {
  // console.log({ at: A[i][j], oldVal });
  if (A[i][j] != oldVal) return;
  A[i][j] = withVal;

  if (isMoveInBounds(A, i + 1, j) && A[i + 1][j] == withVal)
    floodFill(A, i + 1, j, oldVal, withVal);
  if (isMoveInBounds(A, i, j + 1) && A[i][j + 1] == withVal)
    floodFill(A, i, j + 1, oldVal, withVal);
  if (isMoveInBounds(A, i - 1, j) && A[+1][j] == withVal)
    floodFill(A, i - 1, j, oldVal, withVal);
  if (isMoveInBounds(A, i, j - 1) && A[i][j + 1] == withVal)
    floodFill(A, i, j - 1, oldVal, withVal);
}

function solve(A) {
  A = A.map((item, i) => {
    return item.split("");
  });

  A.forEach((row, i) => {
    row.forEach((col, j) => {
      if (A[i][j] == "O") A[i][j] = "-";
    });
  });
  // console.log(A);
  const rows = A.length;
  const cols = A[0].length;
  for (let i = 0; i < rows; i++) floodFill(A, i, 0, "-", "O");
  for (let i = 0; i < rows; i++) floodFill(A, i, cols - 1, "-", "O");
  for (let i = 0; i < cols; i++) floodFill(A, 0, i, "-", "O");
  for (let i = 0; i < cols; i++) floodFill(A, rows - 1, i, "-", "O");

  A.forEach((row, i) => {
    row.forEach((col, j) => {
      if (A[i][j] == "-") A[i][j] = "X";
    });
  });

  // console.log(A);
  A = A.map((item) => item.join());
  return A;
}

let A = ["XXX",
        "XOX",
        "XXX"];
solve(A);


const mat[M][N] =  [{'X', '0', 'X', 'X', 'X', 'X'},
                     {'X', '0', 'X', 'X', 'X', 'X'},
                     {'X', 'X', 'X', 'X', 'X', 'X'},
                     {'_', 'X', 'X', 'X', 'X', 'X'},
                     {'X', 'X', 'X', '0', 'X', '0'},
                     {'0', '0', 'X', '0', '0', '0'},
                   }]
