// Countdown from n to 0

// Non-recursively
function countdown(n) {
    // Print the values n, n-1, n-2, ... 3, 2, 1, 0
    for (var k = n; k >= 0; k--) {
        console.log(k);
    }
}

// countdown(10);

// Recursive version
function rCountdown(n) {
    if (n >= 0) {
        console.log(n);
        rCountdown(n-1);
    }
}
// rCountdown(10);

// Max value of array
function mystery(arr) {
    var mysteryValue = arr[0];
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] > mysteryValue) {
            mysteryValue = arr[k];
        }
    }
    return mysteryValue;
}

var myArr = [3, 8, 5, 7, -4, 4];
// console.log(mystery(myArr));

// Recursive way of finding the max value of an array
function rFindMax(arr, ind = 0) {
    // Challenge for you: how do you handle this if the index passed in the first time is < 0 or > arr.length - 1?

    // Base case: we reach the end of the array, so we'll return that value
    if (ind == arr.length - 1) {
        return arr[ind];
    } else { // Compare current value to remaining items in array recursively - notice the index is going up!
        return Math.max(arr[ind],rFindMax(arr,ind+1));
    }
}

console.log(rFindMax(myArr)); // Max value of entire array - returns 8
console.log(rFindMax(myArr,3)); // Max value of array from index 3 and upwards - returns 7