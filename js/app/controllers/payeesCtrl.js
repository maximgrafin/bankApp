bankControllers.controller('PayeesCtrl', ['$scope', 'Storage', function ($scope, Storage) {
	$scope.getPayees = function(){
		return Storage.getPayees();
	};

	$scope.removePayee = function(payee){
		Storage.removePayee(payee);
	};
}]);
