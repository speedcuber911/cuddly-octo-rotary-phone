class MyPromise {
  constructor(handler) {
    this.state = "pending";
    this.handler = handler;
    this.val = null;

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.val = value;
      }
    };
    const reject = (value) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.val = value;
      }
    };

    try {
      handler(resolve, reject);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state == "fulfilled") onFulfilled(this.val);
    if (this.state == "rejected") onRejected(this.val);
  }
}

const p1 = new MyPromise((resolve, reject) => {});
