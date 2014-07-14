'use strict';

var wheresThat = wheresThat || {};

wheresThat.photoService = (function(angualar){

  var photoServiceFn = function($q, $http, config){
    this.getPhoto = function(){
      console.log(config.panoramioApiEndpoint);
    };

  };

  angular.module('wheresThat.service.photo', []).service('photoService', ['$q', '$http', 'config', photoServiceFn])

}(angular));
