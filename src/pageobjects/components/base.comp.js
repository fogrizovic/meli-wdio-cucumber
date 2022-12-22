export default class BaseComp {
  constructor(iBrowser, rootElement) {
    this.browser = iBrowser;
    this.root = rootElement;
  }

  // Actions
  async scrollIntoView() {
    await this.root.scrollIntoView();
  }
}
