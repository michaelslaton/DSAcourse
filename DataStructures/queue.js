class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val){
    const newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(){
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let myQueue = new Queue;
console.log(myQueue.enqueue(4));  // 1
console.log(myQueue.enqueue(66)); // 2
console.log(myQueue.enqueue(7));  // 3
console.log(myQueue.enqueue(12)); // 4
console.log(myQueue.dequeue()); // 4
console.log(myQueue.dequeue()); // 66
console.log(myQueue.dequeue()); // 7
console.log(myQueue.dequeue()); // 12
console.log(myQueue.dequeue()); // null