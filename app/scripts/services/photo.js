'use strict';

var wheresThat = wheresThat || {};

wheresThat.photoService = (function(angular){

  var photoServiceFn = function($q, $http, config){
    this.getPhoto = function(){
      console.log(config.panoramioApiEndpoint);
    };
  };

  angular.module('wheresThat.service.photo', []).service('photoService', ['$q', '$http', 'config', photoServiceFn]);

  return {
    getPhoto : photoServiceFn.getPhoto
  }

}(angular));


//estimateService.estimate(formModel.fromLocation, formModel.toLocation, formModel.date, formModel.what, formModel.when)
//    .then(function (data) {
//      resultModel.estimatedDeliveryTimes = data;
//      formModel.loading = '';
//      omnitureService.trackToolUsage(config.omniture.pageName.results, formModel.what, formModel.when);
//
//    }, function (data) {
//      formModel.loading = '';
//      resultModel.estimatedDeliveryTimes = null;
//
//      if (data.errors.from) {
//        formModel.error.from = config.error(data.errors.from.code);
//      }
//
//      if (data.errors.to) {
//        formModel.error.to = config.error(data.errors.to.code);
//      }
//
//      if (data.errors.date) {
//        formModel.error.date = config.error(data.errors.date.code);
//      }
//
//      if (data.errors.sla) {
//        formModel.error.sla = config.error(data.errors.sla.code);
//      }
//
//      formModel.focus = true;
//    }
//);
//};


///**
// *
// * @param fromLocation
// * @param toLocation
// * @param date user entered date
// * @param itemType the type of the item 'letter' or 'parcel'
// * @param dateType the type of the date 'sent' for sent-by or 'arrive' for arrive-by
// * @returns a promise
// */
//this.estimate = function (fromLocation, toLocation, date, itemType, dateType) {
//  var deferred = $q.defer();
//
//  var requestConfig = {
//    timeout: config.httpTimeout,
//    headers: {},
//    params: {
//      from: fromLocation,
//      to: toLocation,
//      date: this.dateParameters(date),
//      type: itemType
//    }
//  };
//
//  if (config.apiEndPointAuthHeader) {
//    requestConfig.headers.Authorization = config.apiEndPointAuthHeader;
//  }
//
//  // Invoke the API with the configured endpoint.
//  $http.get(config.apiEndpoint[dateType], requestConfig).then(
//      function (response) {
//        deferred.resolve(self.successResponseProcessing(itemType, response.data));
//      },
//      function (response) {
//        deferred.reject(self.errorResponseProcessing(response.data.errors));
//      }
//  );
//
//  return deferred.promise;
//};
