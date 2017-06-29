
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

