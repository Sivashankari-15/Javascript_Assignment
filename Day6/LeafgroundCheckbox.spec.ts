//Leafground Checkbox Validation

import { test, expect } from "@playwright/test"
test("Validate checkboxes", async ({ page }) => {

    //Navigate to URL
    await page.goto("https://leafground.com/checkbox.xhtml")

    //Clicking on Basic checkbox
    await page.locator('(//h5[text()="Basic Checkbox"]/following::div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"])[1]').click() //click basic checkbox

    //Click on the "Notification Checkbox
    await page.locator('//span[text()="Ajax"]').click() //click Notification checkbox

    //Notification checkbox message is validated
    await expect(page.locator('.ui-growl-title')).toHaveText(/Checked/)

    //favorite language selection
    await page.locator('//label[text()="Java"]').click()
    await page.locator('//label[text()="Javascript"]').click()

    //Click on the "Tri-State" Checkbox.
    await page.locator('//div[contains(@id,"TriState")]').click()

    //Display Tri state message
    const triStateText = await page.locator('(//div[contains(@id,"TriState")]/following::div[@class="ui-growl-message"]/span[".ui-growl-title"])[2]/following-sibling::P').innerText()
    console.log("Tri - state selection: " + triStateText)
    await page.locator('//div[@class="ui-toggleswitch-slider"]').click()

    //Click on Toggle Switch
    await expect(page.locator('(//h5[text()="Toggle Switch"]/following::span[@class="ui-growl-title"])[1]')).toHaveText(/Checked/)

    //Verify Checkbox is disabled. 
    await expect(page.locator('//input[@aria-label="Disabled"]')).toBeDisabled()

    //Select Multiple option
    await page.locator('(//h5[text()="Select Multiple"]/following::div)[1]').click()

    await page.locator('//li[@data-item-value="London"]').click()
    await page.locator('//li[@data-item-value="Paris"]').click()

    //Additional validation - Verify multiple options are sorted or not
    let multipleOptionsTexts = await page.locator('//div[contains(@id,"multiple_panel")]//child::ul/li/label').allTextContents()
    console.log("multiple options are" + multipleOptionsTexts)
    let sortedOptions = [...multipleOptionsTexts].sort()
    console.log("Sorted multiple options are " + sortedOptions)
    let isEqual = multipleOptionsTexts.every((val, index) => val === sortedOptions[index])
    console.log(isEqual ? "Arrays are equal" : "Arrays are not equal")



})















