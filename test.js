const { Builder, By } = require("selenium-webdriver");
const path = require("path");

(async function testSum() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Load HTML file
        await driver.get("file://" + path.join(__dirname, "index.html"));

        // Enter values
        await driver.findElement(By.id("a")).sendKeys("20");
        await driver.findElement(By.id("b")).sendKeys("30");

        // Click Add button
        await driver.findElement(By.id("addBtn")).click();

        // Read result
        const result = await driver.findElement(By.id("res")).getText();

        if (result === "50") {
            console.log("TEST PASSED! ✔");
        } else {
            console.log("TEST FAILED! ❌ Expected 50 but got " + result);
        }

    } finally {
        await driver.sleep(5000);
    }

})();
