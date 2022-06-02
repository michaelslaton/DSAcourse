class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{

  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    var newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // traverse(){
  //   let current = this.head;
  //   while(current){
  //     current = current.next;
  //   }
  // }

  pop(){
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(){
    if(!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index){
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index){
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index,val){
    let foundNode = this.get(index);
    if(foundNode){
      foundNode.val = val
      return true;
    }
    return false;
  }

  insert(index,val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const prev = this.get(index-1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++
    return true;
  }

}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("!")
list.push("<3")
list.push(":)")
list.set(2,"!!!")
console.log(list.insert(3,":D"))
console.log(list.get(3))


// let first = new Node("Hi")
// first.next = new Node ("there")
// first.next.next = new Node ("how")
// first.next.next.next = new Node ("are")
// first.next.next.next.next = new Node ("you")

