/*global element, protractor, browser */
var page = function () {
  var title = $('title');

  this.getPageTitle = function() {
    return title.getText();
  };

};
module.exports = new page();