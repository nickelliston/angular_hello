const mongoose = require('mongoose');
const Task = mongoose.model('Task');

var people = require('../controllers/tasks.js')

module.exports = function (app) {
    app.get('/tasks', function (req, res) {
        people.find(req, res);
    });

    app.get('/tasks/:id', function (req, res) {
        people.findOne(req, res);
    });

    app.post('/tasks', function (req, res) {
        people.create(req, res);
    });

    app.put('/tasks/:id', function (req, res) {
        people.update(req, res);
    });

    app.delete('/tasks/:id', function (req, res) {
        people.remove(req, res);
    });
}

