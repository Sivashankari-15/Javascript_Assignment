//Locators & Assertions

import { test, expect } from "@playwright/test"

//create Lead
test("Create Lead", async ({ page }) => {
    let firstName ="siva"
    let lastName ="s"
    let companyName="abc"

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator('//a[contains(text(),"FA")]').click()

    //click create lead
    await page.locator('//a[text()="Leads"]').click()
    await page.locator('//a[text()="Create Lead"]').click()

    //fill details
    await page.locator('//input[@id="createLeadForm_companyName"]').fill(companyName)
    await page.locator('//input[@id="createLeadForm_firstName"]').fill(firstName)
    await page.locator('//input[@id="createLeadForm_lastName"]').fill(lastName)
    await page.locator('//input[@name="personalTitle"]').fill("Mrs")
    await page.locator('//input[@name="generalProfTitle"]').fill("Software Engineer")
    await page.locator('//input[@name="annualRevenue"]').fill("15,00,000")
    await page.locator('//input[@name="departmentName"]').fill("Information Technology")
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9874563210")
    await page.locator('//input[@name="submitButton"]').click()   


    //assertion Auto-retrying
    await expect (page).toHaveTitle("View Lead | opentaps CRM") 
    await expect(page.locator('//span[@id="viewLead_companyName_sp"]')).toContainText(companyName)
    await expect(page.locator('//span[@id="viewLead_firstName_sp"]')).toContainText(firstName)
    await expect(page.locator('//span[@id="viewLead_lastName_sp"]')).toContainText(lastName)

    //non retrying assertions
    const cName = await page.locator('//span[@id="viewLead_companyName_sp"]').innerText()
    expect(cName).toContain(companyName)
    const fName = await page.locator('//span[@id="viewLead_firstName_sp"]').innerText()
    expect(fName).toContain(firstName)
    const lName = await page.locator('//span[@id="viewLead_lastName_sp"]').innerText()
    expect(lName).toContain(lastName)
    
})

//Edit Lead
test("Edit Lead", async ({ page }) => {
    const Name ="siva"
    const comName="xyz"
    const AR ="1,200,000.00"
    const Dept ="Data Science"
    const desc ="Testing edit Lead"
    
    //login page
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator('//a[contains(text(),"FA")]').click()
    await page.locator('//a[text()="Leads"]').click()

    //Find Leads tab
    await page.locator('//a[text()="Find Leads"]').click()

    //Enter firstname
    await page.locator('//span[text()="Find by"]//following::input[@name="firstName"]').fill(Name)
    
    //Click on Find leads button
    await page.locator('//span[text()="Find by"]//following::button[text()="Find Leads"]').click()

    //Click the first resulting Lead ID
    await page.locator('(//span[text()="Lead List"]//following::table//tbody//tr[1]//td//child::a)[1]').click()

    //Click Edit
    await page.locator('//a[text()="Edit"]').click()

    //verify user in edit page
    await expect(await page.locator('#sectionHeaderTitle_leads').innerText()).toBe("Edit Lead")

    //Edit Company name, Annual Revenue, Department and Description

    await page.locator('#updateLeadForm_companyName').fill(comName)
    await page.locator('#updateLeadForm_annualRevenue').fill(AR)
    await page.locator('#updateLeadForm_departmentName').fill(Dept)
    await page.locator('#updateLeadForm_description').fill(desc)

    //click on update
    await page.locator('//input[@value="Update"]').click()

    //verify user in view page
    await expect(await page.locator('#sectionHeaderTitle_leads').innerText()).toBe("View Lead")

    //Verify Updated fields
    await expect(page.locator('#viewLead_companyName_sp')).toContainText(comName)
    await expect(page.locator('#viewLead_annualRevenue_sp')).toContainText(AR)
    await expect(page.locator('#viewLead_departmentName_sp')).toContainText(Dept)
    await expect(page.locator('#viewLead_description_sp')).toContainText(desc)

})



//Create a new Account
test("Create a new Account", async ({ page }) => {

    let accountName ="Testleaf"
    
    //login page
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()

    //Wait for app launcher icon
    await page.waitForSelector('div.slds-icon-waffle');

    //Verify the title and url of the page using appropriate assertions 
    const title = await page.title();
    expect(["Home | Salesforce", "Lightning Experience"]).toContain(title);
    expect (page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home")

    //Click App Launcher using the class locator
    await page.locator('div.slds-icon-waffle').click()

    //Click View All using getByText
    //await page.getByText('View All').click(); -->not working using Text since 2 elements found 
     await page.getByRole('button',{name:"View All Applications"}).click()

    //Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
    await page.getByPlaceholder("Search apps or items...").fill("service")

    //Click Service using index based XPath
    await page.locator("(//mark[contains(text(),'Service')])[1]").click()

    //Click Accounts using attribute based CSS selector
    await page.locator('a[title="Accounts"]').click()

    //Click New using getByRole
    await page.getByRole('button', { name: 'New' }).click();

    //Enter Account Name using attribute-based CSS selector
    await page.locator('input[name="Name"]').fill(accountName)
    
    //Wait until Save button is enabled and click
    const saveButton = page.locator('//button[normalize-space()="Save"]');
    await expect(saveButton).toBeEnabled();
    await saveButton.click()

    //Verify the toast message displayed
    const toast = page.locator('span.toastMessage'); // Salesforce toast class
    await expect(toast).toContainText(`Account "${accountName} " was created.`);

})