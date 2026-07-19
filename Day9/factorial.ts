//Factorial of a number
function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    let result: number = 1;
    for (let i: number = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}  

// Example calls
console.log(factorial(0)); // Output: 1
console.log(factorial(1));  // Output: 1        
console.log(factorial(5));  // Output: 120
try {
    console.log(factorial(-3)); // Throws error 
} catch (error) {

    //'as' is used to tell typescript that error is of type Error and not unknown
    console.error((error as Error).message); // Output: Input must be a non-negative integer.
}