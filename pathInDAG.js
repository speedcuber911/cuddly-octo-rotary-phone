function buildDAG(B) {
  const graph = {};
  B.forEach((item, i) => {
    const [v1, v2] = item;
    if (!graph[v1]) graph[v1] = [v2];
    else {
      graph[v1].push(v2);
    }
  });
  return graph;
}

function dfsFind(graph, source, vis) {
  console.log({ source });
  vis[source] = true;
  if (graph[source])
    for (let connectedVertex of graph[source]) {
      if (!vis[connectedVertex]) {
        dfsFind(graph, connectedVertex, vis);
        // console.log("Returning", { source, connectedVertex });
      }
    }
}

function bfsFind(graph, source, dest, vis) {
  const queue = [source];
  let found = false;
  while (queue.length && !found) {
    const top = queue.shift();
    vis[top] = true;
    if (top == dest) {
      found = true;
    }
    if (graph[top])
      for (const adjacentEdge of graph[top]) {
        if (!vis[adjacentEdge]) queue.push(adjacentEdge);
      }
  }
  return found;
}
function solve(A, B) {
  const graph = buildDAG(B);
  // console.log(graph);
  const vis = [...new Array(A + 1)].map((el) => false);
  const recStack = [...new Array(A + 1)].map((el) => false);
  // for (const vertex in graph) {
  // }
  // dfsFind(graph, 1, vis, recStack);
  bfsFind(graph, 1, A, vis);
  return vis[A];
}

const A = 5;
const B = [
  [1, 4],
  [2, 1],
  [4, 3],
  [4, 5],
  [2, 3],
  [2, 4],
  [1, 5],
  [5, 3],
  [2, 5],
  [5, 1],
  [4, 2],
  [3, 1],
  [5, 4],
  [3, 4],
  [1, 3],
  [4, 1],
  [3, 5],
  [3, 2],
  [5, 2],
];
console.log(solve(5, B));
