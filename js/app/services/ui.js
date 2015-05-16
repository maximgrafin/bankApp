bankServices.factory('UI', [function () {
	var UI = {};
	UI._messages = [];

	UI.types = {
		success: "success",
		error: "danger"
	};

	UI.showMessage = function (text, type) {
		type = type ? type : UI.types.success;

		UI._messages.push({
			text: text,
			id: UI._messages.length,
			type: type
		});
	};

	UI.getMessages = function () {
		return UI._messages;
	};

	UI.removeMessage = function (messageId) {
		for (var i = UI._messages.length - 1; i >= 0; i--) {
			if (UI._messages[i].id == messageId)
				UI._messages.splice(i, 1);
		}
		;
	};

	return UI;
}]);