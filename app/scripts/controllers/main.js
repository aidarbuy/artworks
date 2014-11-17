'use strict';

var app = angular.module('artworksApp');

app.controller('MainCtrl', function ($scope, Artwork, Medium, Material) {

	$scope.newArtwork = {
		// id/url = internally a number, provided as an absolute URI called “url” 
		artist: "",
		title: "",
		year: 2010,
		description: "adsfasdfsdf",
		price: 199.99,
		includes_vat: true,
		vat: 123,
		materials: "http://54.77.217.175/artworks/1313/materials",
		medium: "http://54.77.217.175/mediums/1",
		dimension1: 110,
		dimension2: 120,
		dimension3: 130,
		dimensions_in_cm: false
	};

	$scope.saveArtwork = function () {
		// Saving new artwork view model
    Artwork.save($scope.newArtwork, function() {
    	// adding new artwork object to array with all artworks
      $scope.artworks.push($scope.newArtworka);

      // cleaning form fields
      $scope.newArtwork.artist = "";
      $scope.newArtwork.title = "";

      // Feedback to the user
      console.log("Artwork saved.");
    });
  };

  $scope.deleteArtwork = function (artworkToDelete) {
  	// Deleting current artwork
  	Artwork.delete({id: artworkToDelete.id}, function () {

  		// removing deleted artwork object from artworks array.
  		$scope.artworks.shift(artworkToDelete);

  		// Feedback to the user
  		console.log("Artwork deleted.");
  	});
  };

  // Requesting urls of all artworks
	Artwork.query({}, function(artworks) {
		// console.log(artworks);
		$scope.artworks = [];

		// iterating url in artworks.urls
		for (var i = 0; i < artworks.urls.length; i++) { 

			// Getiing artwork object from current url
			Artwork.get({id: artworks.urls[i].slice(30)}, function(artwork) {

				// Getting medium object of current artwork
				Medium.get({id: artwork.medium.slice(29)}, function (medium) {
					artwork.mediumObj = medium;
				});

				// Getting all materials for current artwork
				Artwork.get({id: artwork.id + '/materials'}, function(materials) {
					artwork.materialsArray = [];

					// Pushing each material into current artwork's material array
					for (var j = 0; j < materials.urls.length; j++) {
						Material.get({id: materials.urls[j].slice(31)}, function(material) {
							artwork.materialsArray.push(material);
						});
					}
				});

				// Pushing current artwork object into view model artworks array
				$scope.artworks.push(artwork);
			}); // closing current artwork object
		} // ending i loop
	}); // closing artworks object (with urls)
}); // ending MainCtrl
