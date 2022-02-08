const { Builder, Capabilities, By } = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async() => {
    await driver.get('http://127.0.0.1:5500/Week6Labs/day2/automation/movieList/index.html')
})

afterAll(async() => {
    await driver.quit()
})

test('add a movie, cross it off, then delete it', async() => {

    let movieInput = await driver.findElement(By.xpath('//input'))

    let input = 'Hercules'

    await movieInput.sendKeys(`${input}\n`)

    await driver.sleep(3000)

    let movie = await driver.findElement(By.xpath('//li/span'))

    await movie.click()

    await driver.sleep(3000)
        
    let movieDelete = await driver.findElement(By.id(`${input}`))
        
    await movieDelete.click()

    await driver.sleep(3000)
})