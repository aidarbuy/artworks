'use strict';

/**
 * @ngdoc function
 * @name artworksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the artworksApp
 */
angular.module('artworksApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
