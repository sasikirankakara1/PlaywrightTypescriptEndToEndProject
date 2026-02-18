import {test,expect} from '../fixtures/base'
test('hello',async({google})=>{
    await google.page.goto('/')
    await google.clickAbout()
    await google.page.pause()
})