import { test as Base } from "@playwright/test";
import { GooglePage } from "../../pages/googlePage";

type MyFixtures = {
    google:GooglePage
}

export const test = Base.extend<MyFixtures>({
    google: async ({page},use)=>{
    const googlepage = await new GooglePage(page)
    await use(googlepage)
    }
})

export {expect}from '@playwright/test'