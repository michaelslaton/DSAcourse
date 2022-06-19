class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val){
    const newNode = new Node(val);
      if(!this.first){
        this.first = newNode;
        this.last = newNode;
      } else {
        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;
      }
      return ++this.size;
  }

  pop(){
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let myStack = new Stack;

console.log(myStack.push(22))   // 1
console.log(myStack.push(400))  // 2
console.log(myStack.push(15))   // 3
console.log(myStack.pop())      // 15
console.log(myStack.pop())      // 400
console.log(myStack.pop())      // 22
console.log(myStack.pop())      // null