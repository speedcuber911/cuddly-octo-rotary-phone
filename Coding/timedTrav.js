/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

function buildWGraph(times) {
  const graph = {};
  times.forEach(([u, v, w]) => {
    if (graph[u]) {
      graph[u].push({ v, w });
    } else graph[u] = [{ v, w }];
    // if (graph[v]) {
    //   graph[v].push({ v: u, w });
    // } else graph[v] = [{ v: u, w }];
  });
  return graph;
}
function dfsUtil(curr, vis, graph, timed) {
  vis[curr] = true;
  if (Array.isArray(graph[curr])) {
    let maxTime = 0;
    graph[curr].forEach(({ v, w }) => {
      if (!vis[v]) {
         = Math.max(maxTime, w);
        maxTime = Math.max(dfsUtil(v, vis, graph, timed)

        console.log({ curr, v, w, maxTime   });
      }
    });
    return maxTime

  }
}
function dfsFromNode(n, k, graph) {
  const vis = [...new Array(n + 1)].map((el) => false);
  let timed = { total: 0 };
  if (graph[k]) dfsUtil(k, vis, graph, timed);
  let allVisited = true;
  console.log({ vis, timed, g: JSON.stringify(graph) });
  for (let i = 1; i <= n; i++) {
    if (!vis[i]) {
      allVisited = false;
    }
  }
  return allVisited ? timed.total : -1;
}
var networkDelayTime = function (times, n, k) {
  const graph = buildWGraph(times);
  return dfsFromNode(n, k, graph);
};

console.log(
  networkDelayTime(
    [
      [1, 2, 1],
      [2, 3, 2],
      [1, 3, 2],
    ],
    3,
    1
  )
);
