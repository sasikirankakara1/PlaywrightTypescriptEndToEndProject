import { test,Locator, Page } from "@playwright/test";
export class GooglePage{

    readonly about:Locator
    readonly page:Page
    constructor(page:Page){
        this.page = page
        this.about = page.locator("a[class='MV3Tnb']").first()
    }
   
    async clickAbout(){
         return this.about.click()
    }
}