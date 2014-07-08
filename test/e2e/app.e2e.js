'use strict';
describe('Where is it app', function(){
  var page = require('../page/page.js')
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('/index.html');
  });
  it('should have the correct page title', function() {
    sleep(300);
    expect(page.getPageTitle()).toEqual('where is that');
  });
});