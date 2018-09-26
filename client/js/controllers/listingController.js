angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
        $scope.listings.push($scope.newListing);
        Listings.create($scope.newListing).then(function(){
            $scope.newListing = {};
        }, function (err){
          console.log(err);
        });

    };

    $scope.deleteListing = function(index) {
	    //$scope.listings.splice(index, 1);
      Listings.delete($scope.listings[index]._id).then(function(){
      //scope.listings.splice(index, 1);
      }, function (err){
        console.log('failure',err);
      });

      Listings.getAll().then(function(response) {
        $scope.listings = response.data;
      }, function(error) {
        console.log('Unable to retrieve listings:', error);
      });


    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);