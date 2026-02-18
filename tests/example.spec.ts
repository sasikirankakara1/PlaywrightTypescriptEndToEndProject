import { test } from "@playwright/test";

test('hello',async({page})=>{

  await page.goto("https://www.google.com")
  await page.pause()

})