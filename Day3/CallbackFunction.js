//callback Function to handle asynchronous tasks in JavaScript.
let browser = "Chrome";

//function that accepts callback function as parameter
function checkBrowserVersion(callback){ //main function that accepts callback function as parameter

    setTimeout(() => {
        callback(browser) //timeout is det to delay for 2 secs and passed browser variable as argument to the callback function
    }, 2000);
}

//callback function
function callback(br) // browser is passed as parameter
{
    console.log("The browser version is "+ br) //prints browser version after 2 secs delay
}

checkBrowserVersion(callback) //calling the main function and passing callback function as arguments
