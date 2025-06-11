import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({ browser }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table =  page.locator('#productTable')
    //total number of rows and columns

    const columns =  table.locator('#productTable thead tr th')
    console.log("number of columns" , await columns.count())
    expect(await columns.count()).toBe(4)

   const rows = await page.locator('#productTable tbody tr')
   console.log('number of rows',await rows.count())
   expect(await rows.count()).toBe(5)

   const matchedRow = rows.filter({  //specific element check
    has:page.locator('td'),
    hasText:'Smartwatch'
   })

   await matchedRow.locator('input').check()

   // select multiple product by reusabel function

    await selectProduct(rows,page,"Smartwatch")
    await selectProduct(rows,page,"Tablet")
    await selectProduct(rows,page,"Laptop")

    async function selectProduct(rows, page, name){
        const matchedRow = rows.filter({
        has:page.locater('td'),
        hasText: name
    })

    await matchedRow.locator('input').check()

    }

    //print all product details using loop

    for(let i=0;i<await rows.count();i++){
        const row = rows.nth(i);
        const tds = row.locator('td')

        for(let j=0;j< await tds.count()-1;j++){
            console.log(await tds.nth(j).textContent())
        }
    }


  //print all produts in each and every page through looping 

     const pages = await page.locater('.pagination li a')
    

    for(let p=0;p< await pages.count();p++) {

        if(p>0){
            await pages.nth(p).click()
        }
        for(let i=0;i<await rows.count();i++){
            const row =rows.nth(i);
            cosnttds=row.locator('td')
             for(let i=0;i<await rows.count();i++){
        const row = rows.nth(i);
        const tds = row.locator('td')

          for(let j=0;j< await tds.count()-1;j++){
            console.log(await tds.nth(j).textContent())
          }
       }

        }
    }
   
   


});
