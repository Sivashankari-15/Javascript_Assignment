//Validating Text Box States

import {test,expect} from "@playwright/test"

test("Validating textbox states", async({page}) =>{

    //Navigate to the page
    await page.goto("https://leafground.com/input.xhtml")

    //Validate a Disabled Textbox
    await expect (page.getByRole("textbox",{name:"disabled"})).toBeDisabled()

    //Validate an Enabled Textbox
    const nameLocator = page.getByRole("textbox",{name:"Babu Manickam"})
    await expect (nameLocator).toBeEnabled()
    await expect (nameLocator).toBeEditable()

    //Soft Assertion
    await expect.soft(page.locator('//textarea[@placeholder="About yourself"]')).toBeDisabled()
    console.log("Execution continues after soft assertion occurred")

    //Fill Data (Clear the existing default text and fill the new text)
    const textBoxLocator = page.locator('(//*[text()="Clear the typed text."]/following::input)[1]')
    console.log("Default text is "+ await textBoxLocator.getAttribute("value"))
    await textBoxLocator.fill("Playwright Learning")    
    console.log("Test executed successfully")
    


    






})
