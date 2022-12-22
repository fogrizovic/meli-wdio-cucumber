import BasePage from './base.page';

export default class InmueblesPage extends BasePage {
  // Elements
  get publicarLink() {
    return this.browser.$('//h3[contains(text(),"Publicar")]');
  }

  // waits
  async waitForPageLoaded() {
    await this.publicarLink.waitForDisplayed();
  }
}
