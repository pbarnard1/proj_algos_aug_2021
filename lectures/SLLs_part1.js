class SLLNode { // Singly Linked List node
    constructor(val) {
        this.value = val; // Value saved for this node
        this.next = null; // Points to next node down the line - currently this node is NOT connected to any other nodes when we set this to null
        // this.prev = null; // This is for doubly-linked lists
    }
}
// Create two nodes - notice they're NOT connected to each other yet!
var someNode = new SLLNode(10);
var someNode2 = new SLLNode(20);

// Connect the 10 node to the 20 node so that it looks like: [10] -> [20] -> null
someNode.next = someNode2;
console.log(someNode);

// Singly linked list data structure itself
class SLL {
    constructor() {
        this.head = null; // Start with an empty list - the head is the very first node in the list, but right now there is no node there
    }

    // Where you will define your methods for your SLL class

    // Add a node to the front of the list
    addNodeToFront(val) {
        var newNode = new SLLNode(val); // Create the node
        newNode.next = this.head; // Connect the new node to the list (if there are nodes to connect to, otherwise this points to null)
        this.head = newNode; // Make the new node the new head of the list
    }
}

var mySLL = new SLL();
mySLL.addNodeToFront(10); // List is now [10] -> null
console.log(mySLL);
mySLL.addNodeToFront(20); // List is now [20] -> [10] -> null
console.log(mySLL);