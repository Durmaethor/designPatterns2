
// Function Argument Pattern

function myFunc(a,b,c) {
    return a + b + c;
}

console.log(myFunc(1,2,3)); // This will return exactly as it is supposed to
console.log(myFunc(1,2,3,4)); // This will return exactly as it is supposed to, completely ignoring the 4
console.log(myFunc(1,2)); // This will cause an error as there is no 'c', and it will show NaN

// Results 

        // 6
        // 6
        // NaN

// To solve this possible issue, we can use an Argument Object

function myFunc() {
    var x = 0;
    for (var i = 0; i < arguments.length; i++) {
        x = x + arguments[i];
    }
    return x;
}

// This simply passes all of the parameters through the argument object, making us not need to pass things through with a, b, c, etc.