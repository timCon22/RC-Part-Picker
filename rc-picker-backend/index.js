const puppeteer = require('puppeteer')

async function scrapeParts(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    let arr = []


    for (let i = 1; i < 101; i++){

        const [el] = await page.$x(`//*[@id="block-system-main"]/div/div/div[3]/div[${i}]/a/img`)
        
        if (el === undefined) {
            await browser.close()
            return arr
        }
        
        const src = await el.getProperty('src')
        const srcTxt = await src.jsonValue()
    
        const [el2] = await page.$x(`//*[@id="block-system-main"]/div/div/div[3]/div[${i}]/div[1]/a`)
        const txt = await el2.getProperty('textContent')
        const rawTxt = await txt.jsonValue()
    
        const [el3] = await page.$x(`//*[@id="block-system-main"]/div/div/div[3]/div[${i}]/div[1]/a`)
        const href = await el3.getProperty('href')
        const rawLink = await href.jsonValue()
    
        arr.push({srcTxt, rawTxt, rawLink})
    }

    await browser.close()
    return arr
}

//write logic for page increase/decreace

// scrapeParts(`https://traxxas.com/products/search?keyword=rustler`)

module.exports = scrapeParts