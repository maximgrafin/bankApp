bankControllers.controller('SendPaymentCtrl', ['$scope', 'Storage', function ($scope, Storage) {
	$scope.newPayment = undefined;
	$scope.defaultPayment = {
		amount: undefined,
		payee: undefined
	};

	$scope.getPayees = function () {
		return Storage.getPayees();
	};

	$scope.getPayments = function () {
		return Storage.getPayments();
	};

	$scope.isAmountValid = function () {
		return $scope.paymentAmount > 0;
	};

	$scope.sendPayment = function () {
		if (!$scope.paymentForm.$valid)
			return;

		Storage.sendPayment($scope.newPayment);
		$scope.reset();
	};

	$scope.getBalance = function () {
		return Storage.getBalance();
	};

	$scope.reset = function(){
		$scope.newPayment = angular.copy($scope.defaultPayment);
	};

	$scope.reset();
}]);
