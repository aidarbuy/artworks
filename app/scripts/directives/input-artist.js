angular.module('artworksApp')
  .directive('inputArtist', function(){
    return {
      restrict: 'AE',
      templateUrl: 'views/partials/input-artist.html'
    };
  })
