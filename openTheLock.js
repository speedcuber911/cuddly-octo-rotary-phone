function recurLock(target, currIndex, currString, vis, length) {
  vis[currString] = true;
  console.log(currString);
  if (target == currString) {
    console.log("found");
    return 0;
  }
  for (let i = currIndex; i < 4; i++) {
    let nexPossibleIterations = currString.split("");
    nexPossibleIterations[i] =
      nexPossibleIterations[i] == "0"
        ? "9"
        : "" + (parseInt(nexPossibleIterations[i]) - 1) + "";
    nexPossibleIterations = nexPossibleIterations.join("");
    if (!vis[nexPossibleIterations])
      recurLock(target, i + 1, nexPossibleIterations, vis, length + 1);
    nexPossibleIterations = currString.split("");
    nexPossibleIterations[i] =
      nexPossibleIterations[i] == "9"
        ? "0"
        : "" + (parseInt(nexPossibleIterations[i]) + 1) + "";
    nexPossibleIterations = nexPossibleIterations.join("");
    if (!vis[nexPossibleIterations])
      recurLock(target, i + 1, nexPossibleIterations, vis, length + 1);
  }
}
var openLock = function (deadends, target) {
  const vis = {};
  recurLock(target, 0, "0000", vis, 0);
};
openLock(["0201", "0101", "0102", "1212", "2002"], "0202");
