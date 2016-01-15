//Authors: Adeel Qureshi, Steven Williams

angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
	$scope.newEntry = {};
	$scope.detailedInfo = {};
	$scope.showForm = 0;
	console.log($scope.listings);
	
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
		
		$scope.newEntry.latitude = parseFloat($scope.newEntry.latitude);
		$scope.newEntry.longitude = parseFloat($scope.newEntry.longitude);
		$scope.listings.push($scope.newEntry);
		$scope.showForm = 0;
		$scope.newEntry = {};
		
	};
    $scope.deleteListing = function(index) {
		$scope.listings.splice(index, 1);
	};
    $scope.showDetails = function(index) {
		$scope.detailedInfo = $scope.listings[index];
		console.log($scope.detailedInfo);
	};
  }
]);