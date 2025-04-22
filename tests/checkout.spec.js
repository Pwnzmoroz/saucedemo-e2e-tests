const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('Полный процесс покупки', async ({ page }) => {
  // Авторизация
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  // Добавление товара
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addFirstItemToCart();
  await inventoryPage.goToCart();

  // Переход к оформлению
  const cartPage = new CartPage(page);
  await cartPage.proceedToCheckout();

  // Заполнение информации
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillInformation('John', 'Doe', '12345');
  await checkoutPage.completePurchase();

  // Проверка успешного завершения
  await expect(checkoutPage.completeHeader)
    .toContainText('Thank you for your order!');
});