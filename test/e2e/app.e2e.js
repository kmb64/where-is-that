'use strict';
describe('Where is it app', function(){
  var page = require('../page/page.js')
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('/index.html');
  });
  it('should have the correct page title', function() {
    console.log(page.getPageTitle);
    expect(page.getPageTitle()).toBe('where is that');
  });
});