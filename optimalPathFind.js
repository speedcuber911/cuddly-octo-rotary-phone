function optimal([x1, y1], [x2, y2]) {
  let [dX, dY] = [Math.abs(x2 - x1), Math.abs(y2 - y1)];
  let steps = 0;
  while (dX != 0 && dY != 0) {
    // console.log({ dX, dY });
    dX = dX - 1;
    dY = dY - 1;
    steps++;
  }
  if (dX == 0) steps += Math.abs(dY);
  if (dY == 0) steps += Math.abs(dX);
  // console.log(steps);
  return steps;
}

// optimal(3, 4, -1, 0);

var minTimeToVisitAllPoints = function (points) {
  let pathSum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    pathSum += optimal(points[i], points[i + 1]);
  }
};
