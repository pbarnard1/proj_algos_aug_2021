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

var mySLL = new SLL();
mySLL.addNodeToBack(3);
mySLL.addNodeToBack(6);
mySLL.addNodeToBack(10);
mySLL.addNodeToBack(7);
console.log(mySLL.contains(10));
console.log(mySLL.contains(4));

/*
Big O:
O(1) is instantaneous - doesn't depend on size of input or object
O(n) is linear time - the amount of time depends on the size of the input or object directly
O(n^2) is quadratic time - basically a nested for loop; some sorts are O(n^2) like bubble, insertion and selection sorts
O(n^3) is cubic time - basically 3 total nested for loops; examples are brute-forcing finding the longest palindrome
O(log n) is logarithmic time - binary search is one big example
O(n log n) is ??? time - worse than linear but better than quadratic; examples are merge and quick sort
*/