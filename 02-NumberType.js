function NumberType(num){

    let n1 = num;

    if (n1 > 0) {
        console.log(`The given number ${n1} is positive`);
    } else if (n1 < 0) {
        console.log(`The given number ${n1} is negative`);
    } else if (n1 === 0) {
        console.log(`The given number ${n1} is Zero`);
    } else {
        console.log(`Not a number`);
    }

}

NumberType(-5)
NumberType(10)
NumberType(0)
