'use strict';

/**
 * @ngdoc overview
 * @name artworksApp
 * @description
 * # artworksApp
 *
 * Main module of the application.
 */
angular
  .module('artworksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
      })
      .state('list', {
        url: '/list',
        templateUrl: 'templates/list.html',
        controller: 'ListCtrl'
      })
      .state('list.item', {
        url: '/:item',
        templateUrl: 'templates/list.item.html',
        controller: function ($scope, $stateParams) {
          $scope.item = $stateParams.item;
        }
      })
    ;
  })
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/gems', {
        templateUrl: 'views/gems.html',
        controller: 'StoreController'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
