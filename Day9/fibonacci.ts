//fibonacci function
function fibonacci(n: number): number {
    if (n <= 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    let num1: number = 0, num2: number = 1, result: number = 0;
    if (n === 0) return num1;
    if (n === 1) return num2;

    for (let i: number = 2; i <= n; i++) {
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }
    return result;
}

// Examples
console.log(fibonacci(0)); // Input must be a non-negative integer.
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(4)); // Output: 3
console.log(fibonacci(5)); // Output: 5 
console.log(fibonacci(6)); // Output: 8
