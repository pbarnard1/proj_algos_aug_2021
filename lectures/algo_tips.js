/* Remove Blanks
Create a function that, given a string, returns all of that string’s contents, but without blanks. 

If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
*/

/*
Pseudocode:
1. Split the string up into its individual characters.
2. Go through each character.  If the character is a space, remove it.
3. Once the string is done, we'll join the characters back together.
4. Then return the new string.

for (some character in the array) {
    if (this character is a space) {

    }
}
*/

function removeBlanks(str) {
    var charArr = str.split(""); // Splits the string up into an array of characters
    for (var k = 0; k < str.length; k++) { // Loop for going through the characters
        while (charArr[k] == " ") { // Loop for removing consecutive spaces
            charArr.splice(k,1); // 
        }
    }
    var newStr = charArr.join(""); // Merges the characters back together
    return newStr;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

var someStr = "   Pl     ayTha tF u nkyM usi c   ";
console.log(removeBlanks(someStr));

// var x = "Hello world!";
// var y = x.split("");
// console.log(y);