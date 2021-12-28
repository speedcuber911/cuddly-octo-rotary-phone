function dfsSolver(root) {
  if (!root) return;
  if (!root.value) {
    console.log(root);
    return;
  }
  console.log(`<${root.value}>`);
  if (root.children) {
    root.children.forEach((child) => {
      dfsSolver(child);
    });
  }
  console.log(`</${root.value}>`);
}
const tree = {
  children: [
    { children: ["a"], value: "div" },
    { children: ["b"], value: "div" },
  ],
  value: "div",
};
dfsSolver(tree);
