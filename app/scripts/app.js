angular.module('wheresThat', [

  'wheresThat.service.photo',
  'wheresThat.controller.photo'

]).constant('config', {

  panoramioApiEndpoint: 'http://www.panoramio.com/map/get_panoramas.php'

});