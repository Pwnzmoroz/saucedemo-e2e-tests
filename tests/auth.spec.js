const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Авторизация', () => {
  test('Успешная авторизация', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Неудачная авторизация (неверный пароль)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'wrong_password');
    
    await expect(loginPage.errorMessage)
      .toContainText('Username and password do not match');
  });
});