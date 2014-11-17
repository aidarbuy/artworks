angular.module('artworksApp')
  .directive('dimensions', function(){
    return {
      restrict: 'AE',
      templateUrl: 'views/partials/dimensions.html'
    };
  })
