/* eslint-disable no-constructor-return */
/* eslint-disable no-prototype-builtins */
// pages
import HomePage from './pageobjects/home.page';
import InmueblesPage from './pageobjects/inmuebles.page';

const classes = {
  HomePage,
  InmueblesPage,
};

class DynamicClass {
  constructor(iBrowser, pageClass) {
    const className = (pageClass.includes('Static')) ? 'StaticPage' : pageClass;
    if (classes.hasOwnProperty(className)) return new classes[className](iBrowser, pageClass);
    throw Error(`Class name "${className}" is not valid`);
  }
}

export default DynamicClass;
