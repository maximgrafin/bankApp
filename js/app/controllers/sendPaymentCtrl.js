bankControllers.controller('SendPaymentCtrl', ['$scope', 'Storage', 'UI', function ($scope, Storage, UI) {
	$scope.newPayment = undefined;
	$scope.defaultPayment = {
		date: new Date(),
		amount: undefined,
		payee: undefined
	};

	$scope.getBalance = function(){
		return Storage.getBalance();
	};

	$scope.getPayees = function () {
		return Storage.getPayees();
	};

	$scope.sendPayment = function () {
		if (!$scope.paymentForm.$valid)
			return;

		if (Storage.sendPayment($scope.newPayment)) {
			UI.showMessage("Payment sent", UI.types.success);
			$scope.reset();
		}else{
			UI.showMessage("Failed to create payment", UI.types.error);
		}
	};

	$scope.reset = function () {
		$scope.newPayment = angular.copy($scope.defaultPayment);
	};

	$scope.reset();
}]);
