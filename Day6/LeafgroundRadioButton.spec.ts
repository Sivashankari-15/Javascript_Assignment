//Leafground Radio Button

import { test, expect } from "@playwright/test"

test("Validate radio button", async ({ page }) => {

    //Navigate to URL
    page.goto("https://leafground.com/radio.xhtml")

    //Identify and assert the default selected radio button.
    const defaultBroswer = page.locator('//table[contains(@id,"console2")]//label[text()="Safari"]')
    await expect(defaultBroswer).toBeChecked();

    //Click your most favorite browser and assert that the browser is enabled.
    const favBrowser = page.locator('//table[contains(@id,"console1")]//label[text()="Chrome"]')
    await favBrowser.click()
    await expect(favBrowser).toBeChecked()
    await expect(favBrowser).toBeEnabled()

    //Click one of the cities.
    const cityRadio = page.locator('//label[text()="Chennai"]')
    await cityRadio.click()
    await expect(cityRadio).toBeChecked()

    //Select the age group. Assert the default selected button.
    const defaultageRadio = page.locator('//label[text()="21-40 Years"]');
    await expect(defaultageRadio).toBeChecked();
    const ageRadio = page.locator('//label[text()="1-20 Years"]')
    await ageRadio.click();
    await expect(ageRadio).toBeChecked();

})


