var baseUrl = "http://54.77.217.175/";

angular.module('artworksApp')
  .factory('Artwork', function($resource){
    '/artworks'
    // GET 		Lists all artworks in the database
    // POST		Creates a new artwork
    '/artworks/<int:id>'
    // GET 		Shows the details of artwork <id>
    // PUT		(Fully) updates artwork <id>
               // Note: PATCH-like behavior is not supported!
              // For each update request, all fields need to be provided
    // DELETE Deletes artwork <id>
    return $resource(baseUrl + 'artworks/:id', {}, {
      query: { method: "GET", isArray: false },
      update: { method: "PUT" }
    });
  })

  .factory('Medium', function($resource){
    '/mediums'
    // GET 		Lists all mediums in the database
    '/mediums/<int:id>'
    // GET 		Shows the details of medium <id>
    return $resource(baseUrl + 'mediums/:id');
  })
  
  .factory('Material', function($resource){
    '/artworks/<int:id>/materials'
    // GET 		Lists all materials attached to artwork <id>
    /* POST		Adds a material to artwork <id>
              The material has to be provided as a field “url”,
              which gives the absolute URI of the material in the form http://54.77.217.175/materials/<int:id> */
    /* DELETE Removes a material from artwork <id>
              The material has to be provided as a field “url” as above */
    '/materials'
    // GET 		Lists all materials in the database
    // POST 	Creates a new material
    '/materials/<int:id>'
    // GET 		Shows the details of material <id>
    return $resource(baseUrl + 'materials/:id');
  })
