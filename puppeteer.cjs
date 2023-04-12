const puppeteer = require('puppeteer')
console.log('hello puppeteer')
;(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
    })
    const page = await browser.newPage()
    await page.goto('https://www.google.com/')
    await page.waitForSelector('#APjFqb')
    await page.click('#APjFqb')
    await page.type('#APjFqb', 'スカイツリー')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000)
    await page.screenshot({ path: 'screenshot.png' })
    await browser.close()
})()
