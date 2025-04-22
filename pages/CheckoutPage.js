class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.firstNameField = page.locator('#first-name');
      this.lastNameField = page.locator('#last-name');
      this.zipCodeField = page.locator('#postal-code');
      this.continueButton = page.locator('#continue');
      this.finishButton = page.locator('#finish');
      this.completeHeader = page.locator('.complete-header');
    }
  
    async fillInformation(firstName, lastName, zipCode) {
      await this.firstNameField.fill(firstName);
      await this.lastNameField.fill(lastName);
      await this.zipCodeField.fill(zipCode);
      await this.continueButton.click();
    }
  
    async completePurchase() {
      await this.finishButton.click();
    }
  }
  
  module.exports = { CheckoutPage };