// Reversing an SLL (problem found here: https://leetcode.com/problems/reverse-linked-list/)

class SLLNode { // Singly Linked List node
    constructor(val) {
        this.value = val; // Value saved for this node
        this.next = null; // Points to next node down the line - currently this node is NOT connected to any other nodes when we set this to null
        // this.prev = null; // This is for doubly-linked lists
    }
}

// Singly linked list data structure itself
class SLL {
    constructor() {
        this.head = null; // Start with an empty list - the head is the very first node in the list, but right now there is no node there
    }

    // Where you will define your methods for your SLL class

    // Add a node to the front of the list
    // Time: O(1) because it doesn't matter how many nodes are in the list
    addNodeToFront(val) {
        var newNode = new SLLNode(val); // Create the node
        newNode.next = this.head; // Connect the new node to the list (if there are nodes to connect to, otherwise this points to null)
        this.head = newNode; // Make the new node the new head of the list
    }

    // contains - Determine if a given value can be found in the list.  Return true if it is, and false if it isn't
    contains(val) {
        var runner = this.head; // Start the runner (pointer to a node) at the beginning of the list - i.e., its head
        // while loop to travel through the list
        while (runner != null) {
            if (runner.value == val) { // If current node matches the value we're finding
                return true; // Value found - we'll return true
            } else {
                runner = runner.next; // Moves the runner to the next node in the list
            }
        }
        return false; // Value is not in the list
    }

    // Second version with only one return statement
    containsV2(val) {
        var runner = this.head; // Start the runner (pointer to a node) at the beginning of the list - i.e., its head
        var isValueFound = false;
        // while loop to travel through the list
        while (runner != null) {
            if (runner.value == val) { // If current node matches the value we're finding
                isValueFound = true; // Value is found
                break; // Stop looking through the list
            } else {
                runner = runner.next; // Moves the runner to the next node in the list
            }
        }
        return isValueFound; // Return boolean value
    }

    // Adding a node to the END of the list
    addNodeToBack(val) {
        var newNode = new SLLNode(val); // Create the node
        if (this.head == null) { // Edge case: list is empty, so make the new node the head of the list
            this.head = newNode;
        } else { // We already have at least one node in the list beforehand
            var runner = this.head;
            // While loop to go to the end of the list
            while (runner.next != null) {
                runner = runner.next; // Move runner to next node
            }
            runner.next = newNode; // Connect this new node to the last node in the list
        }
    }
}

function reverseList(someSLL) {
    /*
    1. Reverse the .next attribute for each node so it points the other way.
    2. Move the head to the original last node, which now is going to be the first node.

    three runners:
    - previous runner, starting at null
    - current runner, starting at the head of the list
    - next runner, starting at the second node in the list (or null if list has < 2 nodes)

    1. Take the .next attribute of the node being pointed to by the runner and point it to the same node that the previous runner is pointing to.
    2. Move the previous runner to the node that current runner is pointing to.
    3. Move the current runner to the node that next runner is pointing to.
    4. Move the next runner to the next node in the list (UNLESS next runner is already null).
    5. Repeat steps 1-4.  Stop when the runner is pointing to null, i.e. the end of the list.
    
    Finally, move the head to where previous runner is pointing to.
    */
    if (someSLL.head == null || someSLL.head.next == null) { // Edge case: if the list is empty OR if the list has only one node, return the list back - no need to reverse
        return someSLL;
    }
    // Three runners needed: the previous node, the current node, and the next node
    var prevRunner = null;
    var runner = someSLL.head;
    var nextRunner = runner.next;
    // Loop through the list and reverse the list as we go
    while (runner != null) {
        runner.next = prevRunner;
        prevRunner = runner;
        runner = nextRunner;
        if (nextRunner != null) { // If we're not at the end of the list, move this runner down to the next node (otherwise we'll get an error)
            nextRunner = nextRunner.next;
        }
    }
    someSLL.head = prevRunner; // Move the head
    return someSLL; // Return list back
}

var mySLL = new SLL();
mySLL.addNodeToBack(1);
mySLL.addNodeToBack(2);
mySLL.addNodeToBack(3);
reverseList(mySLL);
console.log(mySLL.head); // Print reversed list
// console.log(mySLL.head.next); // Start output at 2nd node
// console.log(mySLL.head.next.next); // At 3rd node
// console.log(mySLL.head.next.next.next); // At 4th node
