function getPerson(personObj) {
    // Check if personObj is a valid object with name and age properties
    if (!personObj || typeof personObj !== 'object' || !('name' in personObj) || !('age' in personObj)) {
        throw new Error("Invalid input object. Expected an object with 'name' and 'age' properties.");
    }

    // Destructure personObj to extract name and age
    const { name, age } = personObj;

    // Return formatted string
    return `Name: ${name}, Age: ${age}`;
}

// Example usage:

// Valid object
const person1 = { name: "John Doe", age: 30 };
console.log(getPerson(person1));  // Output: "Name: John Doe, Age: 30"

// Invalid object (missing properties)
const person2 = { name: "Jane Doe" };
try {
    console.log(getPerson(person2));
} catch (error) {
    console.error(error.message);  // Output: "Invalid input object. Expected an object with 'name' and 'age' properties."
}

// Invalid input (not an object)
const person3 = "John Doe";
try {
    console.log(getPerson(person3));
} catch (error) {
    console.error(error.message);  // Output: "Invalid input object. Expected an object with 'name' and 'age' properties."
}
