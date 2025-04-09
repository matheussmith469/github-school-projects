// Project 1: Simple Calculator

// Function to add two numbers
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

// Function to subtract two numbers
function subtractNumbers(num1: number, num2: number): number {
    return num1 - num2;
}

// Function to multiply two numbers
function multiplyNumbers(num1: number, num2: number): number {
    return num1 * num2;
}

// Function to divide two numbers (returns a string for division by zero error)
function divideNumbers(num1: number, num2: number): string | null {
    if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return parseFloat(num1 / num2);
}

// Main function to test the functions
function main() {
    console.log("Addition:", addNumbers(5, 3));
    console.log("Subtraction:", subtractNumbers(5, 3));
    console.log("Multiplication:", multiplyNumbers(3, 4));
    console.log("Division (should return null for division by zero):", divideNumbers(5, 0));
}

main();
