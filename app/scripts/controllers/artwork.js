'use strict';

/**
 * @ngdoc function
 * @name artworksApp.controller:MainCtrl
 * @description
 * # ArtworkCtrl
 * Controller of the artworksApp
 */
angular.module('artworksApp')
  .controller('ArtworkController', function ($scope, Artwork, Medium, Material) {

    $scope.artwork = {};

    // $scope.artwork = new Artwork({
    //   artist: '', // string
    //   title: '', // string
    //   description: '', // string
    //   year: 2014, // number
    //   price: 999.99, // number
    //   vat: 123, // number
    //   includes_vat: true, // boolean
    //   materials: 'http://54.77.217.175/artworks/659/materials', // URI to the sub-collection of an artwork’s materials
    //   medium: 'http://54.77.217.175/mediums/1', // URI to the medium
    //   dimension1: 10, // number
    //   dimension2: 10, // number
    //   dimension3: 10, // number
    //   dimensions_in_cm: true // Boolean
    // }); //You can instantiate resource class

    $scope.addArtwork = function () {
      $scope.artwork.$save(function(data) {
        $scope.artwork = {};
      });
    };

  });//ArtworkController
