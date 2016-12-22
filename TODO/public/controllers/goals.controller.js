(function() {
	angular.module('app', []);
	'use strict';

	angular
		.module('app')
		.controller('MainController', ['$http', 'Api', 'ConfigService', MainController]);

	function MainController($http, Api, ConfigService) {
		var self = this;

		self.text = MainController;

		//will stock the empty obj
		self.goal = {};


		self.getAllGoals = function getAllGoals() {
			Api.get(ConfigService.apiUrl)
				.then(function success(res) {
					self.collection = res.data;
					// console.log(self.collection);
				},

				function error(err) {
					console.log(err);
				});

		};
		self.getAllGoals();

		// delete goal
		self.deleteGoal = function deleteGoal(id, index) {

			// console.log('The item was deleted from the todo-list', id);
			console.log(id);
			Api.delete('/goals' + '/' + id)
			.then(function success(res) {
				self.collection.splice(index, 1);
				console.log(res);

				self.getAllGoals();
			});

			function error(err) {
				console.log(err);
			}
		};

		//add new goal
		self.addNewGoal = function addNewGoal() {
			Api.post(ConfigService.apiUrl, self.goal)

			.then(function success(res) {
				self.getAllGoals();
			}, function error(err) {
				console.log(err);
			});
		};

		//change checkBox
		self.goalCheckBoxHandler = function goalCheckBoxHandler(id, status) {
			console.log(id, status);
		};

		console.log('Here are all goals');
	}

	self.goalCheckBoxHandler = function(id) {
		var state = true;
		console.log(id, state);
	};

}());
