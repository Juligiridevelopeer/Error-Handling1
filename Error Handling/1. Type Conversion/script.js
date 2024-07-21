function convertToNumber(str) {
    try {
        const num = Number(str);
        if (isNaN(num)) {
            throw new Error("Invalid number");
        }
        return num;
    } catch (error) {
        return "Invalid number";
    }
}

// Example usage:
console.log(convertToNumber("123"));       // Output: 123
console.log(convertToNumber("45.67"));     // Output: 45.67
console.log(convertToNumber("Hello"));     // Output: "Invalid number"
console.log(convertToNumber("123abc"));   // Output: "Invalid number"
