//Verify dynamic movie ticket booking flow in PVR Cinemas website

import { test, expect } from "@playwright/test";

test("PVR Ticket Booking", async ({ page }) => {
    let seatNo = "";
    let seatRow = "";

    await page.goto("https://www.pvrcinemas.com/", { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);

    await page.locator('//span[@class="p-dropdown-label p-inputtext p-placeholder"]//span[@class="cities-placed"]').click({ force: true });
    await page.locator('//li[normalize-space()="Chennai"]').first().click({ force: true });

    await page.locator('//div[@class="container view-container"]//span[text()="Cinema"]').click({ force: true });
    await page.locator('//span[text()="Select Cinema"]').click({ force: true });
    await page.locator('(//div[@class="p-dropdown-items-wrapper"]/ul/li)[1]').click({ force: true });
    await page.locator('(//div[@class="p-dropdown-items-wrapper"]/ul/li)[1]').click({ force: true });
    await page.locator('(//div[@class="p-dropdown-items-wrapper"]/ul/li)[1]').click({ force: true });
    await page.locator('(//div[@class="p-dropdown-items-wrapper"]/ul/li[@class="p-dropdown-item"])[1]').click({ force: true });

    await page.locator('//button[@aria-label="Submit"]//span[@class="p-button-label p-c"][normalize-space()="Book"]').click({ force: true });

    const consentDialog = page.locator('//div[@class="p-dialog-content"]');
    if (await consentDialog.isVisible().catch(() => false)) {
        await page.locator('(//button[normalize-space()="Accept"])[1]').click({ force: true });
    }

    await page.locator('(//span[@class="seat-current-pvr"])[1]').click({ force: true });
    seatNo = await page.locator('(//span[@class="seat-current-pvr"])[1]').innerText();
    seatRow = await page.locator('((//span[@class="seat-current-pvr"])[1]/following::span[@class="seat-row-no area"])[1]').innerText();

    await expect(page.locator('//div[@class="seat-number"]//p')).toContainText(seatRow + seatNo);

    console.log("The total price of the ticket is " + await page.locator('//div[@class="grand-prices"]//h6').innerText());

    await page.locator('(//button[normalize-space()="Proceed"])[1]').click({ force: true });
});
