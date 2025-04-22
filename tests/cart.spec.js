const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test.describe('Работа с корзиной', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Добавление товара в корзину', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addFirstItemToCart();
    
    await expect(inventoryPage.cartBadge).toHaveText('1');
  });

  test('Удаление товара из корзины', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    
    await inventoryPage.addFirstItemToCart();
    await inventoryPage.goToCart();
    await cartPage.removeFirstItem();
    
    await expect(cartPage.cartItems).toHaveCount(0);
  });
});