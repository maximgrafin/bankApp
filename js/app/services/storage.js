bankServices.factory('Storage', [function () {
	var Storage = {};
	Storage.localStorage = window.localStorage;

	Storage._balanceKey = "bankApp_balance";
	Storage._defaultBalance = 100;

	Storage._payeesKey = "bankApp_payees";
	Storage._payees = [];

	Storage._paymentsKey = "bankApp_payments";
	Storage._payments = [];

	Storage._init = function () {
		if (Storage.localStorage.getItem(Storage._balanceKey) === null) {
			Storage._setBalance(Storage._defaultBalance);
		}

		if (Storage.localStorage.getItem(Storage._payeesKey) === null) {
			Storage._payees = [];
			Storage._savePayees();
		} else {
			Storage._loadPayees();
		}

		if (Storage.localStorage.getItem(Storage._paymentsKey) === null) {
			Storage._payments = [];
			Storage._savePayments();
		} else {
			Storage._loadPayments();
		}
	};

	Storage._saveArrayToLS = function (array, key) {
		var arrayStr = angular.toJson(array);
		Storage.localStorage.setItem(key, arrayStr);
	};

	Storage._getArrayFromLS = function (key) {
		var arrayStr = Storage.localStorage.getItem(key);
		return angular.fromJson(arrayStr);
	};

	Storage._savePayments = function () {
		Storage._saveArrayToLS(Storage._payments, Storage._paymentsKey);
	};

	Storage._loadPayments = function () {
		Storage._payments = Storage._getArrayFromLS(Storage._paymentsKey);
	};

	Storage._savePayees = function () {
		Storage._saveArrayToLS(Storage._payees, Storage._payeesKey);
	};

	Storage._loadPayees = function () {
		Storage._payees = Storage._getArrayFromLS(Storage._payeesKey);
	};

	Storage.createPayee = function (payee) {
		payee.id = Storage._payees.length;
		Storage._payees.push(payee);
		Storage._savePayees();
	};

	Storage.removePayee = function (payee) {
		if (!window.confirm("Are you sure wnat to delete payee?"))
			return;

		for (var i = Storage._payees.length - 1; i >= 0; i--) {
			if (Storage._payees[i].id == payee.id)
				Storage._payees.splice(i, 1);
		}
		Storage._savePayees();
	};

	Storage.getPayees = function () {
		return Storage._payees;
	};

	Storage._setBalance = function (newBalance) {
		Storage.localStorage.setItem(Storage._balanceKey, newBalance);
	};

	Storage.getBalance = function () {
		return Storage.localStorage.getItem(Storage._balanceKey);
	};

	Storage.sendPayment = function (payment) {
		var newBalance = Storage.getBalance() - payment.amount; //TODO ms: validate

		if (newBalance < 0)
			return false;

		Storage._payments.push(payment);
		Storage._savePayments();

		Storage._setBalance(newBalance);

		return true;
	};

	Storage.getPayments = function () {
		return Storage._payments;
	};

	Storage._init();
	return Storage;
}]);