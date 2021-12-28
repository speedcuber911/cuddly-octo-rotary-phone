function buildGraph(B) {
  const graph = {};
  B.forEach((item, i) => {
    const [e1, e2] = item;
    if (!graph[e1]) graph[e1] = [e2];
    else {
      graph[e1].push(e2);
    }
  });
  return graph;
}
// { '1': [ 2, 3, 4 ], '2': [ 3 ], '3': [ 5 ], '4': [ 3, 5 ] }
function checkCycle(graph, visited, vertex, recStack) {
  visited[vertex] = true;
  recStack[vertex] = true;
  // console.log({ visiting: vertex });
  if (graph[vertex])
    for (const connectedEdge of graph[vertex]) {
      if (!visited[connectedEdge]) {
        if (checkCycle(graph, visited, connectedEdge, recStack)) {
          // console.log("returnign true at", { graph, visited, connectedEdge });
          return true;
        }
      } else if (recStack[connectedEdge]) {
        return true;
      }
    }
  recStack[vertex] = false;
  return false;
}

function Asolve(A, B) {
  const graph = buildGraph(B);
  // console.log(graph);
  const forestCycleCheck = [];
  const visited = [...new Array(A + 1)].map((el) => false);
  const recStack = [...new Array(A + 1)].map((el) => false);
  for (const vertex in graph) {
    // console.log(graph[vertex], visited);
    if (!visited[vertex]) {
      const treeReturn = checkCycle(graph, visited, vertex, recStack);
      forestCycleCheck.push(treeReturn);
    }
  }

  // console.log(forestCycleCheck);
  return forestCycleCheck.some((treeCycle) => treeCycle);
}

solve();
