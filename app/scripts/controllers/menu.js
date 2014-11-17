'use strict';

/**
 * @ngdoc function
 * @name artworksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the artworksApp
 */
angular.module('artworksApp')
  .controller('MenuCtrl', function($scope){
    $scope.menu = 1;
    $scope.setActive = function (menu) {
      $scope.menu = menu;
    };
    $scope.isActive = function (checkMenu) {
      return $scope.menu === checkMenu;
    };
  });
