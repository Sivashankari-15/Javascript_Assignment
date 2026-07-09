//Leafground Dropdown Validation

import { test, expect } from "@playwright/test"
test("Validate dropdowns", async ({ page }) => {

    //Navigate to URL
    await page.goto("https://leafground.com/select.xhtml")

    //Select favorite UI automation tool
    await page.selectOption('//select[@class="ui-selectonemenu"]', { label: 'Selenium' })//select by label    
    await page.selectOption('//select[@class="ui-selectonemenu"]', { index: 2 }) //select by index

    //Get the count and print all the values
    const dropdownCounts = page.locator('//select[@class="ui-selectonemenu"]/option')
    const dropdownvalues = await dropdownCounts.count()
    console.log('Favorite UI automation tool dropdown values count', dropdownvalues)
    console.log("Favorite UI automation tool dropdown values are")
    for (let index = 1; index <= dropdownvalues; index++) {
        console.log(await page.locator(`(//select[@class="ui-selectonemenu"]/option)[${index}]`).innerText())
    }

    //Choose your preferred Country
    await page.locator('//label[text()="Select Country"]').click()
    await page.locator('//div[@class="ui-selectonemenu-items-wrapper"]/ul/li[text()="Germany"]').click()
    expect (await page.locator('//div[contains(@id,"country")]/label').innerText()).toBe("Germany")
    console.log("Preferred country is selected as " + await page.locator('//div[contains(@id,"country")]/label').innerText())

    //confirm cities
    console.log("Cities listed are ")
    await page.locator('//label[text()="Select City"]').click()
    const items = page.locator('//div[contains(@id,"city_panel")]//child::ul/li')
    console.log('city count', await items.count())
    for (let i = 0; i < await items.count(); i++) {
        console.log(await items.nth(i).textContent())
    }

    //Choose any three courses from the dropdown
    for (let index = 1; index <= 3; index++) {
        await page.locator('//button[@aria-label="Show Options"]/span[@class="ui-button-text"]').click()
        await page.locator(`//span[contains(@id,"auto-complete_panel")]/ul/li[${index}]`).click()

    }

    console.log("Selected courses:")
    console.log(await page.locator('//ul[contains(@class,"autocomplete-multiple-container")]/li/span[2]').allTextContents())
    expect (page.locator('//ul[contains(@class,"autocomplete-multiple-container")]/li/span[2]')).toHaveCount(3)

    //choose Language
    await page.locator('//label[text()="Select Language"]').click()
    const languageDropdown = page.locator('//div[contains(@id,"lang_panel")]//ul[contains(@id,"lang_items")]/li')

    //print all languages from dropdown
    console.log('Total languages ' + await languageDropdown.count())
    for (let index = 1; index <= await languageDropdown.count(); index++) {
        console.log(await page.locator(`//div[contains(@id,"lang_panel")]//ul[contains(@id,"lang_items")]/li[${index}]`).innerText())
    }

    //Select 'Two' irrespective of the language chosen
    await page.locator('//ul[contains(@id,"lang_items")]/li[text()="Tamil"]').click()
    await page.locator('//label[contains(@id,"value_label")]').click()
    await page.locator('//ul[contains(@id,"value_items")]/li[2]').click()

    console.log("Selected language is " + await page.locator('//label[contains(@id,"value_label")]').innerText())








})