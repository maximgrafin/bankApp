bankControllers.controller('OverviewCtrl', ['$scope', 'Storage', function ($scope, Storage) {
	$scope.getBalance = function () {
		return Storage.getBalance();
	};
}]);