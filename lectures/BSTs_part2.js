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

    // Retrieving the size - i.e., the number of nodes in the tree
    size(curNode = this.root) {
        if (curNode == null) { // If we hit a dead end, we've reached the base end - no nodes there, so end the recursion
            return 0;
        } else { // Otherwise count the nodes to the left and right of this one (plus the current node)
            var numLeftNodes = this.size(curNode.left); // Number of nodes to the left
            console.log("Number of nodes to left of "+curNode.value+" = "+numLeftNodes);
            var numRightNodes = this.size(curNode.right); // Number of nodes to the right
            console.log("Number of nodes to right of "+curNode.value+" = "+numRightNodes);
            console.log("Total number of nodes from here, including the "+curNode.value+" one =",numLeftNodes + numRightNodes + 1);
            return numLeftNodes + numRightNodes + 1; // +1 is for counting the current node we're at right now
        }
    }

    // Find the height of the tree
    height(curNode = this.root) {
        if (curNode == null) { // If at a dead end, return 0
            return 0;
        } else { // Otherwise, return 1 (current level) + whichever subtree - the left or the right - has the bigger height
            return 1 + Math.max(this.height(curNode.left),this.height(curNode.right));
        }
    }
}

var myBST = new BST();
myBST.addNode(50);
myBST.addNode(30);
myBST.addNode(70);
myBST.addNode(15);
// myBST.addNode(5);
myBST.addNode(35);
myBST.addNode(60);
// myBST.size();
console.log(myBST.height());