import BaseComp from './base.comp';

export default class ItemComp extends BaseComp {
  // Elements
  get title() {
    return this.root.$('h2');
  }

  // Actions
  getTitle() {
    return this.title.getText();
  }
}
