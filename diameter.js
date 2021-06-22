function computeAdjacencyMatrix(A) {
  const mapped = {};
  A.forEach((parent, node) => {
    if (parent != "-1") {
      if (mapped[parent]) mapped[parent].push(node);
      else mapped[parent] = [node];
      if (mapped[node]) mapped[node].push(parent);
      else mapped[node] = [parent];
    }
  });

  return mapped;
}

const A = [-1, 0];

function bfs(A, source = "0") {
  const adjM = computeAdjacencyMatrix(A);
  console.log(adjM);
  const vis = A.map((_) => 0);
  const queue = [];
  queue.push({ node: adjM[source], level: 0 });

  console.log(queue);
  vis[parseInt(source)] = true;
  let maxDepthNode = { level: 0 };
  while (queue.length) {
    const { node, level } = queue.shift();
    console.log(queue);
    node.forEach((item) => {
      if (!vis[item]) {
        queue.push({ node: adjM[item], level: level + 1 });
        vis[item] = true;
        maxDepthNode = {
          node: item,
          level: Math.max(maxDepthNode.level, level + 1),
        };
      }
    });
  }
  return maxDepthNode;
}

function diameter(A) {
  if (A.length == 1) return 0;
  // const { node, level } = bfs(A);
  // console.log(node, level);
  return;
}
console.log(diameter(A));
// console.log(compute());
