function launchBrowser(browser) {

    let Br = browser.toLowerCase()
    if (Br == "chrome") {
        console.log(`Chrome browser launched successfully`)
    }
    else if (Br == "firefox") {
        console.log(`Firefox browser launched successfully`)
    }
    else if (Br == "msedge") {
        console.log(`MsEdge browser launched successfully`)
    }
    else {
        console.log(`Browser is invalid`)
    }

}

function runTests(tt) {
    let testType = tt.toLowerCase()
    switch (testType) {
        case "smoke":
            console.log(`smoke test is executed`)
            break;
        case "sanity":
            console.log(`sanity test is executed`)
            break;
        case "regression":
            console.log(`regression test is executed`)
            break;
        default:
            console.log("Smoke test is executed")
            break;
    }
}

launchBrowser("Chrome")
launchBrowser("Firefox")
launchBrowser("msedge")
launchBrowser("launch")
runTests("smoke")
runTests("sanity")
runTests("regression")
runTests("unit")