(function () {
	'use strict';

	angular
		.module('app')
		.factory('Api', ['$http', 'ConfigService', Api]);

	function Api($http, ConfigService) {
		var api = {};

		api.get = function(url) {
			var request = $http.get(url);

			return request;
		};

		api.post = function(url, data) {
			var request = $http.post(url, data);

			return request;
		};

		api.delete = function(url) {
			var request = $http.delete(url);

			return request;
		};

		return api;
	}

}());
