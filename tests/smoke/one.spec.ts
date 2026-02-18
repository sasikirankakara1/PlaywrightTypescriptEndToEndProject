import {test,expect} from '@playwright/test'

test('hello',async({page})=>{
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle("Google")
    await page.pause()
})