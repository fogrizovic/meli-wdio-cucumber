/* eslint-disable import/no-extraneous-dependencies */
import { Before } from '@cucumber/cucumber';

const { expect } = require('chai');

const commands = require('../src/customCommands');
const logger = require('../src/logger');

// BEFORE hook for @web scenarios
Before({ tags: '@web' }, async function () {
  // Add globals
  global.expect = expect;
  global.logger = logger;

  // setting browser instance to context
  this.browser = browser;
  // Adding custom commands
  Object.keys(commands).forEach((key) => {
    browser.addCommand(key, commands[key]);
  });
});
