function isCyclic(graph, vertex, visited, parentNode) {
  visited[parseInt(vertex)] = true;

  for (let node of graph[vertex]) {
    console.log("attempting", { node, status: visited[node] });
    if (!visited[node]) {
      if(isCyclic(graph, node, visited, vertex))
        return true;
    } else if (node != parentNode) {
      // console.log({
      //   vertex,
      //   parentNode,
      //   visited: visited.map((visit, i) => ({ [i]: true })),
      // });
      return true;
    }
  }
  return false;
}

function compute(A, graph) {
  const visited = [...new Array(A + 1)].map((el) => false);

  for (let vertex in graph) {
    const parent = vertex;
    if (!visited[parseInt(vertex)]) {
      console.log("processing", { vertex });
      if (isCyclic(graph, vertex, visited, null)) {
        return true;
      }
    }
  }
  return false;
}

function buildGraph(A, B) {
  const graph = {};
  B.forEach((item) => {
    const [first, second] = item;
    if (!graph[first]) graph[first] = [second];
    else {
      graph[first].push(second);
    }
    if (!graph[second]) graph[second] = [first];
    else {
      graph[second].push(first);
    }
  });
  return graph;
}

function solve() {
  const A = 99;
  const B = [
    [5, 96],
    [38, 99],
    [30, 77],
    [51, 88],
    [48, 55],
    [41, 53],
    [26, 86],
    [16, 68],
    [30, 48],
    [45, 76],
    [21, 63],
    [6, 13],
    [23, 61],
    [20, 69],
    [27, 77],
    [42, 63],
    [31, 88],
    [39, 68],
    [40, 41],
    [60, 65],
    [17, 19],
    [79, 87],
    [41, 64],
    [69, 99],
    [59, 95],
    [65, 69],
    [37, 74],
    [35, 42],
    [88, 89],
    [47, 92],
    [50, 92],
    [59, 80],
    [70, 79],
    [24, 76],
    [59, 87],
    [71, 99],
    [32, 96],
    [5, 12],
    [38, 67],
    [53, 63],
    [30, 53],
    [36, 76],
    [40, 76],
    [39, 88],
    [43, 81],
    [11, 74],
    [65, 89],
    [22, 34],
    [34, 56],
    [23, 71],
    [71, 81],
    [8, 61],
    [29, 55],
    [8, 34],
    [37, 52],
    [77, 90],
    [53, 75],
  ];

  const graph = buildGraph(A, B);

  console.log(graph);
  console.log(compute(A, graph));
}

solve();
