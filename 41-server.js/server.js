require('./server/config/config');

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

var {mongoose} = require('./server/db/mongoose');       
var {Todo} = require('./server/models/todo');       // todo.Todo와 같이 property를 생략하고 생성하는 방법


var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo( {
        text: req.body.text
    });

    todo.save().then( (doc) => {
        res.send( doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then( (todos) => {
        res.send( { todos });
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    Todo.findById(id).then( (todo) => {
        if( !todo) {
            return res.status(404).send();
        }
        res.send( { todo});
    }, (e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    Todo.findByIdAndRemove(id).then( (todo) => {
        if( !todo ) {
            return res.status(404).send();
        }

        res.send( { todo});
    }, (e) => {
        res.status(400).send();
    });
});


app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if( _.isBoolean(body.completed) && body.completed ) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then( (todo) => {
        if( !todo) {
            return res.status(404).send();
        }

        res.send( { todo });
    }, (e) => {
        res.status(400).send();
    });
});


app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = { app };