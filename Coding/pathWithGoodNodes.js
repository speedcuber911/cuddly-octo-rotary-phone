function buildGraph(B) {
  const graph = {};
  B.forEach((edge) => {
    const [v1, v2] = edge;

    if (!graph[v1]) graph[v1] = [v2];
    else graph[v1].push(v2);

    if (!graph[v2]) graph[v2] = [v1];
    else graph[v2].push(v1);
  });
  return graph;
}

function dfsUtil(graph, source, vis, C, A) {
  vis[source] = true;
  let sum = 0;
  console.log({ source, C });
  if (A[source - 1] == 1) C--;
  if (graph[source]) {
    if (graph[source].length == 1 && vis[graph[source][0]]) {
      //leaf condition
      if (C >= 0) return 1;
      return 0;
    } else {
      for (const connectedEdge of graph[source]) {
        console.log({ connectedEdge });
        if (!vis[connectedEdge]) {
          sum += dfsUtil(graph, connectedEdge, vis, C, A);
        }
      }
    }
  }
  return sum;
}

function Asolve(A, B, C) {
  const graph = buildGraph(B);
  console.log(graph);
  const vis = [...new Array(A)].map((el) => false);

  return dfsUtil(graph, 1, vis, C, A);
  // console.log(dfsUtil(graph, 1, vis, C, A));
}

const A = [0, 1, 0, 1, 1, 1];
const B = [
  [1, 2],
  [1, 5],
  [1, 6],
  [2, 3],
  [2, 4],
];
const C = 1;
Asolve(A, B, C);
