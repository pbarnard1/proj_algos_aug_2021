// Link to problem: https://www.hackerrank.com/challenges/staircase/problem
// You must have an account on Hacker Rank to view this

/* Problem: Create a function that accepts a positive integer n
and prints out a staircase composed of spaces (" ") and hash/pound symbols ("#").  The
height of the staircase and its base are both n.

For example, for n = 4:
"   #"
"  ##"
" ###"
"####"
*/

// Version made in office hour
function staircase(n) {
    // Outer loop is for each step in the staircase
    for (var k = 1; k <= n; k++) {
        var curStr = ""; // String that will hold the spaces and "#" symbols
        // Inner loop is for determining whether to add a space or a "#"...
        // Note that the string is being built "backwards" while the loop is running
        // "forwards"
        for (var p = 1; p <= n; p++) {
            // If all the "#" symbols haven't been added yet for this line...
            if (p <= k) { // .. then add a "#"
                curStr = "#" + curStr;
            } else { // ... otherwise add a " "
                curStr = " " + curStr;
            }
        }
        console.log(curStr); // Print the current step in the staircase
    }
}

// staircase(6);

// Another version with the if block changed
function staircaseV2(n) {
    // Outer loop is for each step in the staircase
    for (var k = 1; k <= n; k++) {
        var curStr = ""; // String that will hold the spaces and "#" symbols
        // Inner loop is for determining whether to add a space or a "#"...
        // Note that the string is being built "backwards" while the loop is running
        // "forwards"
        for (var p = 1; p <= n; p++) {
            // If we haven't hit the point where we would being adding "#"...
            if (p <= n - k) { // .. then add a " "
                curStr += " ";
            } else { // ... otherwise add a "#"
                curStr += "#";
            }
        }
        console.log(curStr); // Print the current step in the staircase
    }
}

// staircaseV2(6);

// This version uses a single for loop
function staircaseV3(n) {
    var spaceStr = " "; // Character for a space
    var hashStr = "#"; // Character for a hash/pound symbol
    // Loop for each step - going backwards, where k = number of spaces and n - k = number of "#" symbols for this line
    for (var k = n - 1; k >= 0; k--) {
        // .repeat(x) is a method that concatenates the same string x times
        console.log(spaceStr.repeat(k) + hashStr.repeat(n-k));
    }
}

staircaseV3(10);