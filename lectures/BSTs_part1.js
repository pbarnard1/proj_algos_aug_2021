// Nodes used for the binary search tree (BST)
class BSTNode {
    constructor(val) {
        this.value = val; // Hold the value itself
        this.left = null; // Pointer to a node to the left, where its value is smaller than this node's value
        this.right = null; // Pointer to a node to the right, where its value is bigger than this node's value
    }
}

// The binary search tree (BST) itself
class BST {
    constructor() {
        this.root = null; // Root is pointing to the very first - topmost - node in the binary search tree
    }

    // Add methods to the BST class here!

    // Adding a node to the tree
    addNode(val) {
        var newNode = new BSTNode(val); // Creates a node containing the value that's passed into this method
        if (this.root == null) { // If the tree is empty
            this.root = newNode;
        } else {
            var runner = this.root; // Runner that starts off at the root of the tree
            // Loop to navigate the tree
            while (runner != null) {
                if (newNode.value < runner.value) { // If the value is smaller, go left
                    if (runner.left != null) { // If there is a node to the left...
                        runner = runner.left; // Move the runner down
                    } else { // ...otherwise, add the node at that spot and exit
                        runner.left = newNode;
                        break;
                    }
                } else { // Go to the right
                    if (runner.right != null) { // Same logic - if there is a node to the right
                        runner = runner.right; // Move down
                    } else { // Otherwise, add the new node and exit
                        runner.right = newNode;
                        break;
                    }
                }
            }
            
        }
    }
}

var myBST = new BST();
myBST.addNode(50);
myBST.addNode(30);
myBST.addNode(70);
myBST.addNode(15);
myBST.addNode(35);
myBST.addNode(60);
console.log(myBST); // Print the topmost 2 levels or so
console.log(myBST.root.right); // Print the nodes to the right of the root