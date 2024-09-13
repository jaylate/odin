module.exports = class LinkedList {
  head = null;
  tail = null;
  size = 0;
  append(value) {
    if (this.head === null) {
      return this.prepend(value);
    }

    let tmp = this.head;
    while (tmp.next !== null) tmp = tmp.next;

    tmp.next = new Node(value, null);
    this.tail = tmp.next;
    this.size++;

    return this.tail;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
    return this.head;
  }

  at(index) {
    let i = 0;
    let tmp = this.head;
    while (i < index) {
      tmp = tmp.next;
      i++;
    }
    return tmp;
  }

  pop() {
    if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      return value;
    }

    let tmp = this.head;
    while (tmp.next.next !== null) {
      tmp = tmp.next;
    }
    const value = tmp.next.value;
    tmp.next = null;
    this.tail = tmp;

    return value;
  }

  find(value) {
    let i = 0;
    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.value === value) return i;
      i++;
      tmp = tmp.next;
    }
    return null;
  }

  contains(value) {
    return this.find(value) !== null;
  }

  toString() {
    let str = "";
    let tmp = this.head;
    while (tmp !== null) {
      str += `( ${tmp.value} ) -> `;
      tmp = tmp.next;
    }
    str += "null";
    return str;
  }

  insertAt(value, index) {
    let i = 0;
    let tmp = this.head;
    while (tmp.next !== null && i < index) {
      tmp = tmp.next;
      i++;
    }
    tmp.next = new Node(value, tmp.next);
    return value;
  }
  removeAt(index) {
    let i = 0;
    let tmp = this.head;
    while (tmp.next !== null && i < index) {
      tmp = tmp.next;
      i++;
    }
    const value = tmp.next.value;
    tmp.next = tmp.next.next;
    return value;
  }
};

class Node {
  value = null;
  next = null;
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
