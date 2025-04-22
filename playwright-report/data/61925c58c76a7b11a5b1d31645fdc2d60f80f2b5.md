# Test info

- Name: Работа с корзиной >> Удаление товара из корзины
- Location: C:\saucedemo-e2e-tests\tests\cart.spec.js:20:3

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\Admin\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 | const { LoginPage } = require('../pages/LoginPage');
   3 | const { InventoryPage } = require('../pages/InventoryPage');
   4 | const { CartPage } = require('../pages/CartPage');
   5 |
   6 | test.describe('Работа с корзиной', () => {
   7 |   test.beforeEach(async ({ page }) => {
   8 |     const loginPage = new LoginPage(page);
   9 |     await loginPage.navigate();
  10 |     await loginPage.login('standard_user', 'secret_sauce');
  11 |   });
  12 |
  13 |   test('Добавление товара в корзину', async ({ page }) => {
  14 |     const inventoryPage = new InventoryPage(page);
  15 |     await inventoryPage.addFirstItemToCart();
  16 |     
  17 |     await expect(inventoryPage.cartBadge).toHaveText('1');
  18 |   });
  19 |
> 20 |   test('Удаление товара из корзины', async ({ page }) => {
     |   ^ Error: browserType.launch: Executable doesn't exist at C:\Users\Admin\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
  21 |     const inventoryPage = new InventoryPage(page);
  22 |     const cartPage = new CartPage(page);
  23 |     
  24 |     await inventoryPage.addFirstItemToCart();
  25 |     await inventoryPage.goToCart();
  26 |     await cartPage.removeFirstItem();
  27 |     
  28 |     await expect(cartPage.cartItems).toHaveCount(0);
  29 |   });
  30 | });
```