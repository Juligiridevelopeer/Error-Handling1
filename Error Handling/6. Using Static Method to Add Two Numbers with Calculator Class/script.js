class Calculator {
    static add(num1, num2) {
        return num1 + num2;
    }
}

// Call the static method add without instantiating Calculator
const sum = Calculator.add(5, 10);
console.log("Sum:", sum);  // Output: Sum: 15
