class Cache {
  constructor(size) {
    this.size = size;
    this._cache = new Map();
    this.lifeArr = [];
  }
  set = (key, val) => {
    if (this.get(key)) {
      this_cache.set(key, val);
    }
    if (this._cache.size >= this.size) {
      const toDel = this.lifeArr.shift();
      console.log("Removing", toDel);
      this._cache.delete(toDel);
    }
    this._cache.set(key, val);
    this.lifeArr.push(key);
    console.log(this._cache, this.lifeArr);
  };
  get = (key) => {
    const val = this._cache.get(key);
    return val || null;
  };
}

const myCache = new Cache(3);

myCache.set("a", 1);
myCache.set("b", 2);
myCache.set("c", 3);
myCache.set("d", 4);

console.log(myCache.get("a"));
