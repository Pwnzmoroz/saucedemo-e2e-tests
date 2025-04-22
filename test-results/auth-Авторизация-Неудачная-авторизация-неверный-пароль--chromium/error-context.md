# Test info

- Name: Авторизация >> Неудачная авторизация (неверный пароль)
- Location: C:\saucedemo-e2e-tests\tests\auth.spec.js:13:3

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
   3 |
   4 | test.describe('Авторизация', () => {
   5 |   test('Успешная авторизация', async ({ page }) => {
   6 |     const loginPage = new LoginPage(page);
   7 |     await loginPage.navigate();
   8 |     await loginPage.login('standard_user', 'secret_sauce');
   9 |     
  10 |     await expect(page).toHaveURL(/inventory.html/);
  11 |   });
  12 |
> 13 |   test('Неудачная авторизация (неверный пароль)', async ({ page }) => {
     |   ^ Error: browserType.launch: Executable doesn't exist at C:\Users\Admin\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
  14 |     const loginPage = new LoginPage(page);
  15 |     await loginPage.navigate();
  16 |     await loginPage.login('standard_user', 'wrong_password');
  17 |     
  18 |     await expect(loginPage.errorMessage)
  19 |       .toContainText('Username and password do not match');
  20 |   });
  21 | });
```