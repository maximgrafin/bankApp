var bankApp = angular.module('bankApp', [
	'ngRoute',
	'bankControllers'
]);

bankApp.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider
			.when('/overview', {
				templateUrl: 'templates/overview.html',
				controller: 'OverviewCtrl'
			})
			.otherwise({
				redirectTo: '/overview'
			});
	}]);

var bankControllers = angular.module('bankControllers', []);
