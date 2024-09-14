module.exports = class HashMap {
  constructor(size = 16, loadFactor = 0.75) {
    this.buckets = Array(size).fill();
    this.size = 0;
    this.loadFactor = loadFactor;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return hashCode;
  }
  set(key, value) {
    const index = this.hash(key);

    if (this.capacity / this.length >= this.loadFactor) {
      this.buckets.append(undefined);
    }

    if (!this.buckets[index]) {
      this.buckets[index] = new Node(key, value);
      this.size++;
    } else {
      this.size += this.buckets[index].updateNode(key, value);
    }
  }
  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return null;
    return this.buckets[index].findNode(key);
  }
  has(key) {
    return this.get(key) !== null;
  }
  remove(key) {
    if (!this.has(key)) return false;
    const index = this.hash(key);
    if (this.buckets[index].key === key) this.buckets[index] = undefined;
    else this.buckets[index].removeNode(key);
    return true;
  }
  length(key) {
    return this.size;
  }
  clear() {
    this.buckets = Array(16).fill();
    this.size = 0;
  }
  keys() {
    return this.entries().map(([key, value]) => {
      return key;
    });
  }
  values() {
    return this.entries().map(([key, value]) => {
      return value;
    });
  }
  entries() {
    const entries = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        const nestedEntries = this.buckets[i].listNode();
        if (nestedEntries.flat().length === 2) {
          entries.push(nestedEntries);
        } else {
          for (const entry of nestedEntries) {
            entries.push(entry);
          }
        }
      }
    }
    return entries;
  }
};

class Node {
  constructor(key = null, value = null, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
  updateNode(key, value) {
    if (this.key === key) {
      this.value = value;
    } else if (this.next) {
      this.next.updateNode(key, value);
    } else {
      this.next = new Node(key, value);
      return 1;
    }
    return 0;
  }
  findNode(key) {
    if (this.key === key) {
      return this.value;
    } else {
      return this.next ? this.next.findNode(key) : null;
    }
  }
  removeNode(key) {
    if (this.next.key === key) {
      this.next = null;
    } else if (this.next.next) {
      this.next.removeNode(key);
    }
  }
  listNode() {
    if (this.key === null) return;
    let entries = [this.key, this.value];
    if (this.next) entries.push(this.next.listNode());
    entries = entries.flat();
    if (entries.length > 2) {
      const tmp = entries.slice();
      entries = [];
      while (tmp.length) {
        entries.push(tmp.splice(0, 2));
      }
    }
    return entries;
  }
}
