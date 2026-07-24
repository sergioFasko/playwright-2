import{test, expect} from "@playwright/test";

test('test_dia7', async({page}) => {
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 await page.getByRole('textbox',{name:'username'}).fill('Admin');
 await page.getByRole('textbox',{name:'Password'}).fill('admin123');
 await page.getByRole('button',{name:'Login'}).click();
//  //await page.getByRole('link',{name:'Admin'});
 await expect (page.getByRole('link', {name:'Admin'})).toBeVisible();

 });

test('test_dia7_negativo', async({page}) => {
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 await page.getByRole('textbox',{name:'username'}).fill('Admin');
 await page.getByRole('textbox',{name:'Password'}).fill('No_admin123');
 await page.getByRole('button',{name:'Login'}).click();
 //await page.getByRole('link',{name:'Admin'});
 await expect (page.getByText('Invalid credentials')).toBeVisible();

});
