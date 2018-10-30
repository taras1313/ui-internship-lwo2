class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

export class Stack {
  constructor() {
    this.size = 0;
    this.data = {};
  }
  push(el) {
    let currEl = new Node(el);
    if (!this.size) {
      this.data[this.size] = currEl;
      currEl.prev = null;
      this.last = currEl;
      this.size++;
    } else {
      this.data[this.size] = currEl;
      let currLast = this.last;
      this.data[this.size].prev = currLast;
      this.last = currEl;
      this.size++;
    }
  }
  pop() {
    if (this.size) {
      this.size--;
      let deletedEl = this.data[this.size];
      delete this.data[this.size];
      this.last = this.data[this.size - 1];
      return deletedEl.value;
    }
  }
}
