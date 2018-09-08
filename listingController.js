angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    document.getElementById("detailedInformation").style.display = "none";

    $scope.addListing = function() {
    	var listingToAdd =
    	{
            "code": $scope.code, 
            "name": $scope.name, 
            "coordinates": {
                "latitude": $scope.latitude, 
                "longitude": $scope.longitude
            }, 
            "address": $scope.address
        }; 

        $scope.listings.push(listingToAdd);
        $scope.listings.sort(function(a,b) {return (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0);});
        document.getElementById("form").reset();

    };
    $scope.deleteListing = function(index) {
    	$scope.listings.splice(index, 1);

    };
    $scope.showDetails = function(index) {
    	document.getElementById("detailedInformation").style.display = "block";
    	$scope.detailedInfo = $scope.listings[index];
    };
  }
]);