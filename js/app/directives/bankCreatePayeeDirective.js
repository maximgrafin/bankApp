bankDirectives.directive('bankCreatePayee', ['Storage', function (Storage) {
	var PayeeDirective = {
		restrict: 'E',
		templateUrl: 'templates/payeeForm.html',
		link: function ($scope) {
			$scope.newPayee = undefined;
			$scope.defaultPayee = {
				name: undefined,
				bank: undefined,
				iban: undefined
			};

			$scope.createPayee = function () {
				if (!$scope.payeeForm.$valid)
					return;

				Storage.createPayee($scope.newPayee);
				$scope.reset();
			};

			$scope.reset = function () {
				$scope.newPayee = angular.copy($scope.defaultPayee);
			};
		}
	};

	return PayeeDirective;
}]);
