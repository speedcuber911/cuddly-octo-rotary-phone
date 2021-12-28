const isStanceValid = (x, y, A, B) => x > 0 && y > 0 && x <= A && y <= B;
function allStances(_x, _y) {
  const xs = [-2, -2, -1, -1, 1, 1, 2, 2];
  const ys = [-1, 1, -2, 2, -2, 2, -1, 1];
  return xs.map((x, i) => [_x + x, _y + ys[i]]);
}

function findPath(A, B, C, D, E, F) {
  const vis = [...new Array(A + 1)].map((el) => {
    return [...new Array(B + 1)].map((el) => false);
  });
  const qu = [{ x: C, y: D, level: 0 }];
  while (qu.length) {
    const { x, y, level: _level } = qu.shift();
    if (x == E && y == F) return _level;
    const allPossibleMoves = allStances(x, y);
    for (let i = 0; i < allPossibleMoves.length; i++) {
      const [x, y] = allPossibleMoves[i];
      if (isStanceValid(x, y, A, B) && !vis[x][y]) {
        vis[x][y] = true;
        qu.push({ x, y, level: _level + 1 });
      }
    }
  }
  return -1;
}
findPath(384, 387, 106, 134, 210, 35);
