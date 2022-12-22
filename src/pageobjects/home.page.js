import BasePage from './base.page';
import HeaderComp from './components/header.comp';
import RecomendationsComp from './components/recomendations.comp';

export default class HomePage extends BasePage {
  // Elements
  get header() {
    return new HeaderComp(this.browser);
  }

  get recomendations() {
    return new RecomendationsComp(this.browser);
  }

  // waits
  async waitForPageLoaded() {
    await this.recomendations.verTodasLink.waitForDisplayed();
  }
}
