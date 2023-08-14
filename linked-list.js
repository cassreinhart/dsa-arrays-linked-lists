/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val); //create a new node to store value
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    let deleteMe = this.tail;
    while (currentNode.next) { //find the last node with next value that is not null
      currentNode = currentNode.next
    }
    this.tail = currentNode.next
    return deleteMe
  }

  /** shift(): return & remove first item. */

  shift() {
    let newHead = this.head.next;
    let oldHead = this.head;
    this.head = newHead;
    return oldHead;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    const currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      currentNode = currentNode.next;
      if (i === idx) {
        return currentNode  
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    const currentNode = this.head;
    const newNode = new Node(val);
    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        let nextNode = currentNode.next;
        currentNode = newNode;
        currentNode.next = nextNode;
      }
      currentNode = currentNode.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const currentNode = this.head;
    const newNode = new Node(val);
    for (let i = 0; i < this.length; i++) {
      if (i === idx - 1) {
        let nextNode = currentNode.next;
        currentNode = newNode;
        currentNode.next = nextNode;
      }
      currentNode = currentNode.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    const currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === idx - 1) {
        let deleteMe = currentNode.next;
        let nextNode = currentNode.next.next;
        currentNode.next = nextNode;
        return deleteMe;
      }
      currentNode = currentNode.next
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    const currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }
    return total;
  }
}

module.exports = LinkedList;
