//Fibonacci series

function fibonacciSequence(n) {
    if (n <= 0) {
        console.log("Input must be a positive integer")
    }

    else {
        let n1 = 0
        let n2 = 1
        console.log(`Fibonacci Sequence up to ${n} terms:`)
        for (let i = 0; i < n; i++) {
            console.log(n1); //print current number
            const n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
        }
    }

}
fibonacciSequence(0);
fibonacciSequence(1);
fibonacciSequence(5);
