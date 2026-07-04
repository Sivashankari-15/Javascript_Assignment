import { chromium, firefox, test } from "@playwright/test"

test("RedBus(Edge)", async () => {

    const eBrowser = await chromium.launch({ headless: false, channel: "msedge" })
    const eContext = await eBrowser.newContext()
    const ePage = await eContext.newPage()
    await ePage.goto("https://www.redbus.in")
    console.log("The title of the page is " + await ePage.title())
    console.log("The URL of the page is " + ePage.url())

    const fBrowser = await firefox.launch()
    const fContext = await fBrowser.newContext()
    const fPage = await fContext.newPage()
    await fPage.goto("https://www.redbus.in")
    console.log("The title of the page is " + await fPage.title())
    console.log("The URL of the page is " + fPage.url())


})

