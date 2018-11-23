export class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.amount = 0;
    this.head = null;
    this.tail = null;
  }

  push(el) {
    const newNode = new Node(el);
    let currEl = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      while (currEl.next) {
        currEl = currEl.next;
      }
      currEl.next = newNode;
      newNode.prev = currEl;
      this.tail = newNode;
    }
    this.amount++;
  }

  pop() {
    if (this.amount) {
      const currTail = this.tail;
      if (this.amount === 1) {
        this.head = null;
        this.tail = null;
        this.amount--;
        return currTail;
      }
      this.tail = currTail.prev;
      this.tail.next = null;
      this.amount--;
      return currTail;
    }
  }

  iterate(callback) {
    let currEl = this.head;
    while (currEl.next) {
      callback(currEl);
      currEl = currEl.next;
    }
    callback(currEl);
  }

  insertAfter(i, value) {
    let currEl = this.head;
    let newEl = new Node(value);
    while (currEl) {
      if (currEl.value === i) {
        const nextEl = currEl.next;
        currEl.next = newEl;
        newEl.prev = currEl;
        newEl.next = nextEl;
        if (nextEl) {
          nextEl.prev = newEl;
        } else {
          this.tail = newEl;
        }
        this.amount++;
        return true;
      }
      currEl = currEl.next;
    }
    return false;
  }

  removeItem(value) {
    let currEl = this.head;
    while (currEl) {
      if (currEl.value === value) {
        const nextEl = currEl.next;
        const prevEl = currEl.prev;
        if (nextEl) {
          nextEl.prev = prevEl;
        } else {
          this.tail = nextEl;
        }
        if (prevEl) {
          prevEl.next = nextEl;
        } else {
          this.head = prevEl;
        }

        this.amount--;
        return true;
      }
      currEl = currEl.next;
    }

    return false;
  }
}
