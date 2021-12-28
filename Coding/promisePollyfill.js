const promise = new Promise((resolve, reject) => {
  resolve();
});

class myPromise {
  constructor(Fn) {
    this.noop = () => {};
    this.callback = Fn;
    this.state = "pending";
    this.result = null;
    this.fulFilledCallbacks = [];
    this.rejectedCallbacks = [];

    const resolve = (val) => {
      this.result = val;
      this.state = "resolved";
      this.fulFilledCallbacks.forEach((callback) => {
        callback(val);
      });
    };

    const reject = (val) => {
      if ((this.state = "pending")) {
        this.state = "rejected";
        this.value = value;
        this.rejectedCallbacks.forEach((callback) => {
          callback(err);
        });
        rejectedCallbacks;
      }
    };

    try {
      Fn(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled, onRejected) {
    if (this.state == "pending") {
      this.fulFilledCallbacks.push(onFulfilled || this.noop);
      this.rejectedCallbacks.push(onRejected || this.noop);
    }
    else if (this.state == "resolved") {
      onFulfilled(this.result);
    } else if (this.state == "rejected") {
      onRejected(this.result);
    }
  }
}

const p1 = new myPromise((resolve, reject) => {
  const summer = [...new Array(100)]
    .map((el, i) => i + 1)
    .reduce((acc, el) => acc + el, 0);
  setTimeout(() => resolve(summer), 500);
});

p1.then((result) => {
  console.log(result);
});

setTimeout(
  () =>
    p1.then((result) => {
      console.log(result);
    }),
  1000
);
