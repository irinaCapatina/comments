exports.routes = function routes (app) {

    var goals = require('./components/goals');

    app.get('/goals', goals.getAllGoals);
    app.post('/goals', goals.addNewGoal);
    app.delete('/goals/:id', goals.deleteGoal);
};