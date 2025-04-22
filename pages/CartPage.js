class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItems = page.locator('.cart_item');
      this.removeButton = page.locator('button:has-text("Remove")').first();
      this.checkoutButton = page.locator('#checkout');
    }
  
    async removeFirstItem() {
      await this.removeButton.click();
    }
  
    async proceedToCheckout() {
      await this.checkoutButton.click();
    }
  }
  
  module.exports = { CartPage };