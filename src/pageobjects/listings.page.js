import BasePage from './base.page';
import HeaderComp from './components/header.comp';
import ItemComp from './components/item.comp';

export default class ListingsPage extends BasePage {
  // Elements
  get header() {
    return new HeaderComp(this.browser);
  }

  get items() {
    return this.browser.$$('li[class="ui-search-layout__item shops__layout-item"]')
      .map((itemElement) => new ItemComp(this.browser, itemElement));
  }
}
