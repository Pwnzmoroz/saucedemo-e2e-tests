class InventoryPage {
    constructor(page) {
      this.page = page;
      this.addToCartButton = page.locator('button:has-text("Add to cart")').first();
      this.cartBadge = page.locator('.shopping_cart_badge');
      this.cartLink = page.locator('.shopping_cart_link');
    }
  
    async addFirstItemToCart() {
      await this.addToCartButton.click();
    }
  
    async goToCart() {
      await this.cartLink.click();
    }
  }
  
  module.exports = { InventoryPage };