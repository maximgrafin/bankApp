bankControllers.controller('PayeesCtrl', ['$scope', 'Storage', 'UI', function ($scope, Storage, UI) {
	$scope.getPayees = function(){
		return Storage.getPayees();
	};

	$scope.removePayee = function(payee){
		Storage.removePayee(payee);
		UI.showMessage("Payee removed", UI.types.success);
	};
}]);
