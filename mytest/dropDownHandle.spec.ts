import { test ,Browser, chromium, Page } from "@playwright/test"

test('drop down handles' , async()=>{

    const url = "https://www.magupdate.co.uk/magazine-subscription/pmac";

    const browser : Browser = await chromium.launch({headless:false});
    const page : Page = await browser.newPage();

    await page.goto(url);

    const countryDropdown = '#Contact_CountryCode';

    // select by value
    await page.selectOption(countryDropdown , {value : 'IN'})

    // select by visible text
    await page.selectOption(countryDropdown , {label : 'Greenland'})

    //select by index
    await page.selectOption(countryDropdown , {index:2})


    //print all country 

    // belove we use cssSelector
    const allCountryName = await page.$$(countryDropdown + ' > option'); //select#Contact_CountryCode > option
    console.log(allCountryName.length);

    for(const i of allCountryName){

        const text = await i.textContent();
        console.log(text);
        
        if(text === 'India'){

            await page.selectOption(countryDropdown , {label: 'India'});
            break;
        }
    }
    

    await page.waitForTimeout(5000);

})