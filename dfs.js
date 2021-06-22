function nextCords(x, y) {
  const xs = [-1, -1, -1, 0, 0, 1, 1, 1];
  const ys = [-1, 0, 1, -1, 1, -1, 0, 1];
  return xs.map((xCord, i) => ({ xNew: xCord + x, yNew: y + ys[i] }));
}

function isMoveInBounds(A, x, y) {
  const xBound = A.length;
  const yBound = A[0].length;
  return x < xBound && y < yBound && x >= 0 && y >= 0;
}

function dfs(A, x, y, visited, islandLength) {
  visited[x][y] = 1; // mark visited
  // console.log("visiting", { x, y }, "having:", A[x][y]);
  const movements = nextCords(x, y);
  movements.forEach(({ xNew, yNew }) => {
    if (
      isMoveInBounds(A, xNew, yNew) &&
      !visited[xNew][yNew] &&
      A[xNew][yNew] == 1
    ) {
      islandLength.length++;
      dfs(A, xNew, yNew, visited, islandLength);
    }
  });
}

function calcPath(A) {
  const visited = [];
  let maxLength = 0;
  A.forEach((row) => visited.push(row.map((el) => 0)));
  for (let i = 0; i < visited.length; i++)
    for (let j = 0; j < visited[0].length; j++) {
      if (!visited[i][j] && A[i][j] == 1) {
        let islandLength = { length: 1 };
        dfs(A, i, j, visited, islandLength);
        if (islandLength.length > maxLength) maxLength = islandLength.length;
      }
    }
  return maxLength;
}

(() => {
  A = [[1]];
  console.log(calcPath(A));
})();
