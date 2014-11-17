angular.module('artworksApp')
  .directive('artist', function(){
    return {
      restrict: 'AE',
      templateUrl: 'views/partials/artist.html'
    };
  })
