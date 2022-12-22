import BaseComp from './base.comp';

export default class RecomendationsComp extends BaseComp {
  constructor(iBrowser) {
    super(iBrowser, iBrowser.$('.recommendations'));
  }

  // Elements
  get verTodasLink() {
    return this.root.$('//a[contains(text(),"Ver todas")]');
  }
}
