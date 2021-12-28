function traverse(A) {
  const ans = [];
  const preAns = {};
  const queue = [{ node: A, level: parseInt(0) }];
  while (queue.length) {
    const topEl = queue.shift();
    const { level, node } = topEl;

    // console.log(preAns);

    if (!preAns[parseInt(level)]) preAns[parseInt(level)] = [];
    preAns[level].push(node.data);

    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }

  // console.log(preAns);
  return Object.keys(preAns).map((key) => preAns[key]);
}

console.log(traverse(create()));

function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function create() {
  const first = new TreeNode(1);
  const second = new TreeNode(3);
  const third = new TreeNode(9);
  const fifth = new TreeNode(15);
  const sixth = new TreeNode(7);

  first.left = second;
  first.right = third;
  third.left = fifth;
  third.right = sixth;

  return first;
}
//
//  1
// / \
// 3  9
//   / \
// 15   7
