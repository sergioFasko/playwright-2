import {test,expect} from "playwright/test";

test('test_dia8', async({page})=> {
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 await page.getByRole('textbox',{name:'Username'}).fill('Admin');
 await page.getByRole('textbox',{name:'Password'}).fill('admin123');
 await page.getByRole('button',{name:'Login'}).click();
 await page.getByRole('link',{name:'Admin'}).click();
 //await page.getByRole('list').getByText('User Management').click();
 //await expect(page.getByText('Users',{exact:true})).toBeVisible();
 await page.getByRole('navigation',{name:'Topbar menu'}).getByText('User Managment').click();
 await page.getByRole('menuitem', {name:'Users'}).click();

 const rows = page.getByRole('table').getByRole('row');
 const usernames: string[]=[];

 const rowCount= await rows.count();

 for (let i=1; i<rowCount; i++) {
    
    const cell= rows.nth(i).getByRole('cell').nth(1);
    const username = await cell.textContent();

    if(username){
        usernames.push(username);
    }

    console.log(usernames);

   }
});