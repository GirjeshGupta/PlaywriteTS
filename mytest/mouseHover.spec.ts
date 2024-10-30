import test, { Browser, chromium, Page } from "@playwright/test";

test('Mouse hover' , async ()=>{

    const browser :  Browser = await chromium.launch({headless:false});

    const page : Page = await browser.newPage();

    page.goto('https://www.spicejet.com/');

    await page.getByText('Add-ons').first().hover({force:true});

    page.getByText('Visa Services').first().click();

    await page.waitForTimeout(5000);

})


test('bigbasket mouse hover' , async()=>{
    const browser : Browser = await chromium.launch({headless:false});

    const page : Page = await browser.newPage();

    await page.goto('https://www.bigbasket.com/');

    await page.click("button[id='headlessui-menu-button-:R5bab6:'] > div");
    
    await page.getByText('Beverages',{exact:true}).first().hover();

    await page.getByText('Tea').first().hover();

    await page.getByText('Tea Bags').click();

    await page.waitForTimeout(5000);

})