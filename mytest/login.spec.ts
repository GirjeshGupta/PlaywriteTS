import { test , expect , Browser , Page, Locator} from "@playwright/test";
import { webkit , chromium ,firefox } from "playwright";

test('login test' ,async () =>{

    const URL = 'https://qavbox.github.io/demo/signup/';

    const browser :Browser = await chromium.launch({headless:false})
    const page :Page  = await browser.newPage();

    await page.goto(URL);    

    const fullname : Locator = await page.locator('#username');

    const email : Locator = await page.locator("#email");

    await fullname.fill("test");
    await email.fill("playwright");


    const title= await page.title();
    console.log(title);

    await page.screenshot({path: 'homepage.png'});

    expect(title).toEqual("Registration Form");

    browser.close();
    

});
