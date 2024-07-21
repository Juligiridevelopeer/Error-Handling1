function numberChecker(numbers) {
    // Define and return a function that checks if a number is in the array
    return function(num) {
        return numbers.includes(num);
    };
}

// Example usage:

// Create an array of numbers
const array = [1, 2, 3, 4, 5];

// Create a function using numberChecker that checks if a number is in the array
const checkNumber = numberChecker(array);

// Test the returned function with different numbers
console.log(checkNumber(3)); // Output: true
console.log(checkNumber(6)); // Output: false
