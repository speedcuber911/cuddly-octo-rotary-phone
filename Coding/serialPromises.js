const tasks = [
  function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("chopping done");
      }, 1000);
    });
  },
  function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("baking done");
      }, 1000);
    });
  },
  function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("serving done");
      }, 1000);
    });
  },
  function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("eating done");
      }, 1000);
    });
  },
];

function executeSeq(i, tasks) {
  if (i == tasks.length) return;
  tasks[i]().then((task) => {
    console.log(task);
    executeSeq(i + 1, tasks);
  });
}
executeSeq(0, tasks);
