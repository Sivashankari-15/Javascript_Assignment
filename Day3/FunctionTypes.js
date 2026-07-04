//Named Function
function userProfile(name) {
    console.log(`Hello ${name}!`)
}

//Arrow Function
const double = (n) => n * 2


//Anonymous function with setTimeout
setTimeout(function () {
    console.log("This message is delayed by 2 seconds")
}, 2000);


//callback function
function getUserData(x) {
    setTimeout(() => {
        x()
    }
        , 3000);
}

function x() {
    console.log("Call back function delayed by 3 Secs")
}


//calling all the function types
userProfile("Sivasangari")
console.log("Double the value of the number 5 is " + double(5))
getUserData(x)

