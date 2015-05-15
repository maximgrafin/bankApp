var bankApp = angular.module('bankApp', [
	'ngRoute',
	'bankControllers',
	'bankServices'
]);

bankApp.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider
			.when('/overview', {
				templateUrl: 'templates/overview.html',
				controller: 'OverviewCtrl'
			})
			.when('/sendPayment', {
				templateUrl: 'templates/sendPayment.html',
				controller: 'SendPaymentCtrl'
			})
			.when('/payees', {
				templateUrl: 'templates/payees.html',
				controller: 'PayeesCtrl'
			})
			.otherwise({
				redirectTo: '/overview'
			});
	}]);

var bankControllers = angular.module('bankControllers', []);
var bankServices = angular.module('bankServices', []);
