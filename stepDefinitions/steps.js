/* eslint-disable import/no-extraneous-dependencies */
import { Given, When, Then } from '@wdio/cucumber-framework';

import { getBaseUrl } from '../src/utils';

import urls from '../src/urls.json';
import HomePage from '../src/pageobjects/home.page';
import ListingsPage from '../src/pageobjects/listings.page';

import DynamicClass from '../src/DynamicClass';

Given('I am {string} user',
  async function (userId) {
    // adding user to context
    this.activeUser = userId;
    this.browser = browser;
  });

Given('I open {string}',
  async function (pageClass) {
    const url = urls[pageClass].replace('{baseUrl}', getBaseUrl());

    await this.browser.url(url);
  });

When('I search for {string}',
  async function (product) {
    const homePage = new HomePage(this.browser);

    await homePage.header.searchProduct(product);
  });

When('I see that first item contains {string} in the title',
  async function (productName) {
    const listingsPage = new ListingsPage(this.browser);

    const firstItem = listingsPage.items[0];

    expect(await firstItem.getTitle(), `Item title does not include ${productName}`)
      .to.include(productName);
  });

When('I select {string} category',
  async function (category) {
    const homePage = new HomePage(this.browser);

    await homePage.header.selectCategory(category);
  });

Then('the {string} is opened and loaded correctly',
  async function (pageClass) {
    const page = new DynamicClass(this.browser, pageClass);
    await page.waitForPageLoaded();
  });
