angular.module('artworksApp')
  .directive('price', function(){
    return {
      restrict: 'AE',
      templateUrl: 'views/partials/price.html'
    };
  })
