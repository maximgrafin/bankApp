bankDirectives.directive('bankMessagesDirective', ['UI', function(UI) {
	var bankMessageDirective = {
		restrict: 'E',
		templateUrl: 'templates/messages.html',
		link: function ($scope) {
			$scope.getMessages = function(){
				return UI.getMessages();
			};
			$scope.removeMessage = function(messageId){
				UI.removeMessage(messageId);
			};
		}
	};

	return bankMessageDirective;
}]);