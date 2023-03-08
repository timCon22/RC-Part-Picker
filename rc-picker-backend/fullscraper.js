const puppeteer = require('puppeteer')

async function scrapeProduct(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    let arr = []


    for (let i = 1; i < 5; i++){  
        for(let j = 1; j < 25; j++){
            const [el] = await page.$x(`/html/body/div[3]/div[1]/div/div[2]/div[2]/div/div/div/div/div[2]/table[${i}]/tbody/tr[${j}]/td[${i}]/a/div[1]/img`)
                                    // /html/body/div[3]/div[1]/div/div[2]/div[2]/div/div/div/div/div[2]/table[1]/tbody/tr[25]/td[1]/a/div[1]/img
                                    // /html/body/div[3]/div[1]/div/div[2]/div[2]/div/div/div/div/div[2]/table[2]/tbody/tr[1]/td[1]/a/div[1]/img
                                    // /html/body/div[3]/div[1]/div/div[2]/div[2]/div/div/div/div/div[2]/table[2]/tbody/tr[1]/td[1]/a/div[1]/img
            if (el === undefined) {
                await browser.close()
                return arr
            }
            
            const src = await el.getProperty('src')
            const srcTxt = await src.jsonValue()
        
            const [el2] = await page.$x(`/html/body/div[3]/div[1]/div/div[2]/div[2]/div/div/div/div/div[2]/table[1]/tbody/tr[${j}]/td[${i}]/a`)
            const txt = await el2.getProperty('textContent')
            const rawTxt = await txt.jsonValue()
            
            const [el3] = await page.$x(`/html/body/div[3]/div[1]/div/div[2]/div[2]/div/div/div/div/div[2]/table[1]/tbody/tr[${j}]/td[${i}]/a`)
            const href = await el3.getProperty('href')
            const rawLink = await href.jsonValue()

            arr.push({srcTxt, rawTxt, rawLink})
        }
    }

    await browser.close()
    console.log(arr)
    return arr
}

// scrapeProduct('https://traxxas.com/products/showroom')

module.exports = scrapeProduct