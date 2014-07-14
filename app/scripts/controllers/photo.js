'use strict';

var wheresThat = wheresThat || {};

wheresThat.photoService = (function(angular){

  var photoControllerFn = function($scope, photoService){

    $scope.hello = photoService.getPhoto();

  };

  angular.module('wheresThat.controller.photo', []).controller('photo', ['$scope', 'photoService', photoControllerFn]);

}(angular));

///*global $*/
//
//'use strict';
//
//$(document).ready(function () {
//  var url = 'http://www.panoramio.com/map/get_panoramas.php?set=public&from=0&to=20&minx=-180&miny=-90&maxx=180&maxy=' +
//      '90&size=original&mapfilter=true&callback=?';
//
//  $.getJSON(url, function (data) {
//    console.log(data);
//  });
//
//  console.log('hey');//
//
////  var url2 = 'http://www.panoramio.com/wapi/data/get_photos?v=1&key=dummykey&tag=test&offset=
//// 0&length=20&minx=-30&miny=0&maxx=0&maxy=150&callback=?';
////
////  $.getJSON(url2, function (data) {
////     console.log(data);
////  });
//});