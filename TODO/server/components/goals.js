var MongoClient = require('mongodb').MongoClient;
var uuid = require('node-uuid');

exports.getAllGoals = function getAllGoals(req, res) {
	MongoClient.connect('mongodb://localhost:27017/goals')
		.then(response => {
			var goals = response.collection('goal').find().toArray();
			return goals;
		})
		.then(goals => {
			res.send(goals);
		});
};

exports.addNewGoal = function addNewGoal(req, res) {
	if (!req.body.text) {
		res.status(401).send('Text is mandatory');
	}

	MongoClient.connect('mongodb://localhost:27017/goals')
		.then(response => {
			response.collection('goal').insert({ 
				'text': req.body.text, 
				'id': uuid.v4()}); 
			return true;
		})
		.then(send => {
			res.send('Added new item to the todo-list');
		});
};

exports.deleteGoal = function deleteGoal(req, res) {

	if(!req.params.id) {
		res.status(401).res.send('id is mandatory');
		return;
	}

	MongoClient.connect('mongodb://localhost:27017/goals')
		.then(response => {
			response.collection('goal').findOneAndDelete({
				id : req.params.id
			});

			return true;
		})
		.then(send => {
			res.send('Item was successfully deleted');
		});
};
