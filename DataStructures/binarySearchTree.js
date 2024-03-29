function spacer(){
  console.log(' ')
  console.log('-------------------------------------------------------------------')
  console.log(' ')
}

// Tree Code Below

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return null;
    let current = this.root;
    while (true) {
      if (value === current.value) return current;
      if (value < current.value) {
        if (current.left) current = current.left;
        else return null;
      } else {
        if (current.right) current = current.right;
        else return null;
      }
    }
  }

  BFS() {
    let queue = [];
    let data = [];
    let node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSpreorder() {
    let data = [];

    function helper(node) {
      data.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      return;
    }

    helper(this.root);
    return data;
  }

  DFSpostorder(){
    let data = [];

    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      return data.push(node.value);
    }

    helper(this.root);
    return data;
  }

  DFSinorder(){
    let data = [];

    function helper(node) {
      if (node.left) helper(node.left);
      data.push(node.value);
      if (node.right) helper(node.right);
    }

    helper(this.root);
    return data;
  }
}

const tree = new BST();
tree.insert(22);
tree.insert(10);
tree.insert(30);
tree.insert(5);
tree.insert(6);
tree.insert(1);

spacer(); // ------------------------------------------

console.log('Tree Root: ', tree);
// BST {
//   root: Node {
//     value: 22,
//     left: Node { value: 10, left: [Node], right: null },
//     right: Node { value: 30, left: null, right: null }
//   }
// }
spacer(); // ------------------------------------------

console.log('Tree Left Branch: ', tree.root.left);
// Node {
//   value: 10,
//   left: Node {
//     value: 5,
//     left: Node { value: 1, left: null, right: null },
//     right: Node { value: 6, left: null, right: null }
//   },
//   right: null
// }
spacer(); // ------------------------------------------

console.log('Tree Right Branch: ', tree.root.right);
// Node { 
//   value: 30, 
//   left: null, 
//   right: null 
// }

tree.find(30)
// Node { 
//   value: 30, 
//   left: null, 
//   right: null 
// }

tree.find(5)
// Node {
//   value: 5,
//   left: Node { value: 1, left: null, right: null },
//   right: Node { value: 6, left: null, right: null }
// }

spacer(); // ------------------------------------------

let tree2 = new BST();
tree2.insert(10);
tree2.insert(6);
tree2.insert(8);
tree2.insert(15);
tree2.insert(20);
tree2.insert(3);

//      10
//   6      15
// 3   8       20

console.log('Breadth First Search: ', tree2.BFS()); //    [ 10, 6, 15, 3, 8, 20 ]
console.log('DFS Pre Order: ', tree2.DFSpreorder()); //   [ 10, 6, 3, 8, 15, 20 ]
console.log('DFS Post Order: ', tree2.DFSpostorder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log('DFS In Order: ', tree2.DFSinorder()); //     [ 3, 6, 8, 10, 15, 20 ]