function buildGraph(edges) {
  const graph = {};
  edges.forEach(([from, to]) => {
    if (graph[from]) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }

    if (graph[to]) {
      graph[to].push(from);
    } else {
      graph[to] = [from];
    }
  });
  return graph;
}
function trav(curr, graph, vis, step) {
  vis[curr] = step;
  graph[curr].forEach((vertex) => {
    if (vis[vertex] == null) {
      trav(vertex, graph, vis, step + 1);
    }
  });
}
function dfs(graph, n) {
  const ans = [];
  for (let vertex in graph) {
    const vis = [...new Array(n)].map((el) => null);
    trav(vertex, graph, vis, 0);
    ans.push(vis.reduce((acc, el) => acc + el));
  }
  return ans.length ? ans : [0];
}

var sumOfDistancesInTree = function (n, edges) {
  const graph = buildGraph(edges);
  return dfs(graph, n);
};
console.log(sumOfDistancesInTree(1, []));
