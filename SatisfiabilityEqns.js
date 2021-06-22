function convert(num) {
  let numC = num;
  numC += 97;
  return String.fromCharCode(numC);
}
function buildGraph(equations) {
  const graph = {};
  equations.forEach((equation) => {
    if (equation.split("")[1] == "=") {
      const a = equation.split("")[0];
      const b = equation.split("")[3];
      if (!graph[a]) {
        graph[a] = [b];
      } else {
        graph[a].push(b);
      }
      if (!graph[b]) {
        graph[b] = [a];
      } else {
        graph[b].push(a);
      }
    }
  });
  return graph;
}

function dfsColor(graph, curr, color, vis, colorWith) {
  vis[curr] = true;
  color[curr] = colorWith;
  graph[curr].forEach((node) => {
    if (!vis[node]) dfsColor(graph, node, color, vis, colorWith);
  });
}
var equationsPossible = function (equations) {
  const graph = buildGraph(equations);
  const color = [...new Array(26)].reduce(
    (acc, el, i) => ({ ...acc, [convert(i)]: i }),
    {}
  );
  const vis = [...new Array(26)].map((el) => false);
  let colorWith = 28;
  for (let vertex in graph) {
    if (!vis[vertex]) dfsColor(graph, vertex, color, vis, colorWith);
    colorWith++;
  }
  // console.log(graph);
  // console.log(color);
  let isPossible = true;
  equations.filter((equation) => {
    if (equation.split("")[1] == "!") {
      const a = equation.split("")[0];
      const b = equation.split("")[3];
      if (color[a] == color[b]) isPossible = false;
    }
  });
  return isPossible;
};

t = equationsPossible(["a==d", "f==f", "c!=f", "b!=d", "e==e"]);
console.log(t);
