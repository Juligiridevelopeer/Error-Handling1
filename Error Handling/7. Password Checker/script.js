class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    // Getter method for password
    get password() {
        // Return password with all characters replaced by asterisks
        return this._password.replace(/./g, '*');
    }

    // Setter method for password
    set password(newPassword) {
        // Check if the new password meets the criteria
        if (newPassword.length >= 8 && /[A-Z]/.test(newPassword) && /[0-9]/.test(newPassword)) {
            this._password = newPassword;
        } else {
            console.error("Invalid password. Password must be at least 8 characters long and contain at least one uppercase letter and one number.");
        }
    }
}

// Example usage:
const user = new User('john_doe', 'Password123');

console.log("Original Password:", user.password); // Output: ********

user.password = 'NewPass123'; // Valid password
console.log("New Password:", user.password); // Output: ********

user.password = 'pass'; // Invalid password
