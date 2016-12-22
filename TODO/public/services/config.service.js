(function () {
	'use strict';

	angular
		.module('app')
		.factory('ConfigService', [ConfigService]);

	function ConfigService () {
		var Config = {};

		Config.apiUrl = 'http://localhost:1111/goals';

		return Config;
	}
	
}());