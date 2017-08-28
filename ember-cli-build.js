/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Filter   = require('broccoli-filter');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  function MyFilter(inputNode) {
    Filter.call(this, inputNode);
  }

  MyFilter.prototype = Object.create(Filter.prototype);

  MyFilter.prototype.processString = function(existingString) {
    return `/* This is a message from brandon \n compiled at ${new Date()} */

      ${existingString}` ;
  };

  MyFilter.prototype.extensions = ['js'];
  MyFilter.prototype.targetExtension = 'js';

  return new MyFilter(app.toTree());
};

