import {test, expect} from "@playwright/test";

test('test_dia6', async ({ page }) => {
  await page.goto('https://saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce');
  await page.getByRole('button',{name:'Login'}).click();
  await page.pause();
  });