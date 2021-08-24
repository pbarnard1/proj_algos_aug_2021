/*

String: In-Order Subsets
Create strSubsets(str). Return an array with every possible in-order character subset of str. The resultant array itself need not be in any specific order – it is the subset of letters in each string that must be in the same order as they were in the original string. Given "abc", return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).
["","a","b","c","ab","ac","bc","abc"]
*/

function strSubsets(str) {
    var allSolutions = []; // Array will hold all the given solutions to this problem
    rStrSubsets(str,-1,"",allSolutions); // Notice the -1 to account for the +1 offset when we start the recursion off
    return allSolutions;
}

/* Function that will handle the recursion
givenStr = passed string
curInd = where we are in the string in terms of an index
builtStr = currently built string recursively
solArr = solution array
*/
function rStrSubsets(givenStr,curInd,builtStr,solArr) {
    solArr.push(builtStr); // Pushes the currently built string into the solution array
    // Loop through all the characters remaining - then build recursively
    for (var k = curInd+1; k < givenStr.length; k++) {
        rStrSubsets(givenStr,k,builtStr+givenStr.charAt(k),solArr);
    }
}

console.log(strSubsets("abc"));
console.log(strSubsets("12345"));
