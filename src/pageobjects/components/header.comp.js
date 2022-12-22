import BaseComp from './base.comp';

export default class HeaderComp extends BaseComp {
  constructor(iBrowser) {
    super(iBrowser, iBrowser.$('header[data-siteId=MLA]'));
  }

  // Elements
  get searchBoxInput() {
    return this.root.$('#cb1-edit');
  }

  get searchBoxSubmitButton() {
    return this.root.$('button[type=submit]');
  }

  get categoriesLink() {
    return this.root.$('.nav-menu-categories-link');
  }

  // Actions
  async searchProduct(product) {
    await this.searchBoxInput.setValue(product);
    await this.searchBoxSubmitButton.click();
  }

  async selectCategory(category) {
    await this.categoriesLink.moveTo();
    const categoryLink = this.root.$(`//li[./a[contains(text(),"${category}")]]`);
    await categoryLink.click();
  }
}
