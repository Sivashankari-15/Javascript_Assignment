//Create Lead in Leaftaps.com using CSS selectors

import { test, expect} from "@playwright/test"

test("Create a Lead and validate", async ({ page }) => {

    //sign in 
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click();

    //go to create lead page
    await page.locator("#label>a").click();
    await page.locator('a:has-text("Leads")').click();
    await page.locator('a:has-text("Create Lead")').click();

    //validating the user in correct page
    expect (await page.locator("#sectionHeaderTitle_leads").innerText()).toBe("Create Lead");

    //fill details
    await page.locator("#createLeadForm_companyName").fill("Testleaf")
    await page.locator("#createLeadForm_firstName").fill("Sivasangari")
    await page.locator("#createLeadForm_lastName").fill("S")
    await page.locator("#createLeadForm_personalTitle").fill("Mrs")
    await page.locator("#createLeadForm_generalProfTitle").fill("Lead quality Engineer")
    await page.locator("#createLeadForm_annualRevenue").fill("15,00,000")
    await page.locator("#createLeadForm_departmentName").fill("Information Tecchnology")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210")
    await page.locator(".smallSubmit").click();   

    //Get the title after submitting
    console.log("The title of the page is " + await page.title())

})
