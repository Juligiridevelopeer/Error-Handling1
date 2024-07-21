class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

// Instantiate an instance of the Employee class
const emp = new Employee('John Doe', 'Software Engineer', 60000);

// Call getSalary method
console.log(emp.getSalary()); // Output: 60000
