//using Var
const browserName = 'chrome'
function getBrowserName() {
    if (browserName === 'chrome') {
        var browserName = 'firefox'
        console.log("Browser inside function and inside if block:", browserName)
    }
    console.log("Browser inside function and outside if block:", browserName)
}

getBrowserName()
console.log("Global browserName: " + browserName)

//using let
const browserName1 = 'chrome'
function getBrowserName1() {
    if (browserName1 === 'chrome') {
        let browserName1 = 'firefox'
        console.log("Browser inside function and inside if block:", browserName1)
    }
    console.log("Browser inside function and outside if block:", browserName1)
}

getBrowserName1()
console.log("Global browserName: " + browserName1)