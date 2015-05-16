bankControllers.controller('SendPaymentCtrl', ['$scope', 'Storage', 'UI', function ($scope, Storage, UI) {
	$scope.newPayment = undefined;
	$scope.defaultPayment = {
		date: new Date(),
		amount: undefined,
		payee: undefined
	};

	$scope.createPayeeMode = false;

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
		UI.showMessage("Payment sent");
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
