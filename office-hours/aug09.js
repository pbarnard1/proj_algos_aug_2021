/*
Parens Valid
Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.
*/


/*
INPUT: String, OUTPUT: boolean (true/false)
1. Check each character starting at the beginning of the string.
2. If it is a "(", add that on.
3. If it is a ")", remove one of the "(".  However, if there is NO "(", immediately end and return false.
4. If we reach of the string and still have leftover "(", return false.  Otherwise we return true.

Pseudocode:
    unpairedLeftParens = 0; // Number of "(" that haven't been paired up with a closing ")"
    for (each character in the string) {
        if (the character is a "(") {
            increase unpairedLeftParens
        } else if (the character is a ")") {
            decrease unpairedLeftParens
            if (unpairedLeftParens < 0) { // Unpaired ")" cannot be paired with a left "(" since there are no "("
                return false;
            }
        }
    }
    check to see if we still have any unpaired "(" here - if that number is exactly 0
    return true if there aren't (0 exactly), false if there are (> 0)
*/

function isValidParens(str) {
    var unpairedLeftParens = 0;
    // Loop through the string
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "(") { // OR str.charAt(i) == "("
            unpairedLeftParens++;
        } else if (str[i] == ")") {
            unpairedLeftParens--;
            if (unpairedLeftParens < 0) { // If there is NO way to pair a ")" up with a "("
                return false;
            }
        }
    }
    // Now check to see if there are any unpaired left parentheses left ("(")
    if (unpairedLeftParens == 0) { // No unpaired left parentheses
        return true;
    } else { // At least one unpaired left parenthesis
        return false;
    }
    // one-line version: return unpairedLeftParens == 0
}

var test1 = "Y(3(p)p(3)r)s", expected1 = true;
var test2 = "N(0(p)3", expected2 = false;
var test3 = "N(0)t )0(k", expected3 = false;
var test4 = ")(", expected4 = false; 

console.log(isValidParens(test1));
console.log(isValidParens(test2));
console.log(isValidParens(test3));
console.log(isValidParens(test4));

