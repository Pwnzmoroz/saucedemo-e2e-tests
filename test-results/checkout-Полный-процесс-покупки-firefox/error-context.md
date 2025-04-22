# Test info

- Name: Полный процесс покупки
- Location: C:\saucedemo-e2e-tests\tests\checkout.spec.js:7:1

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\Admin\AppData\Local\ms-playwright\firefox-1482\firefox\firefox.exe
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
   5 | const { CheckoutPage } = require('../pages/CheckoutPage');
   6 |
>  7 | test('Полный процесс покупки', async ({ page }) => {
     | ^ Error: browserType.launch: Executable doesn't exist at C:\Users\Admin\AppData\Local\ms-playwright\firefox-1482\firefox\firefox.exe
   8 |   // Авторизация
   9 |   const loginPage = new LoginPage(page);
  10 |   await loginPage.navigate();
  11 |   await loginPage.login('standard_user', 'secret_sauce');
  12 |
  13 |   // Добавление товара
  14 |   const inventoryPage = new InventoryPage(page);
  15 |   await inventoryPage.addFirstItemToCart();
  16 |   await inventoryPage.goToCart();
  17 |
  18 |   // Переход к оформлению
  19 |   const cartPage = new CartPage(page);
  20 |   await cartPage.proceedToCheckout();
  21 |
  22 |   // Заполнение информации
  23 |   const checkoutPage = new CheckoutPage(page);
  24 |   await checkoutPage.fillInformation('John', 'Doe', '12345');
  25 |   await checkoutPage.completePurchase();
  26 |
  27 |   // Проверка успешного завершения
  28 |   await expect(checkoutPage.completeHeader)
  29 |     .toContainText('Thank you for your order!');
  30 | });
```