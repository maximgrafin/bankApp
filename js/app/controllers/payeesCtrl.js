bankControllers.controller('PayeesCtrl', ['$scope', 'Storage', function ($scope, Storage) {
	$scope.newPayee = undefined;
	$scope.defaultPayee = {
		name: undefined,
		bank: undefined,
		iban: undefined
	};

	$scope.getPayees = function(){
		return Storage.getPayees();
	};

	$scope.createPayee = function () {
		if (!$scope.payeeForm.$valid)
			return;

		Storage.createPayee($scope.newPayee);
		$scope.reset();
	};

	$scope.removePayee = function(payee){
		Storage.removePayee(payee);
	};

	$scope.reset = function(){
		$scope.newPayee = angular.copy($scope.defaultPayee);
	};

	$scope.reset();
}]);
