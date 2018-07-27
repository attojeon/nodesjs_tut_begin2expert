const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

id = '5b5a92890ac6a5263cdba048';

Todo.findById(id).then((todos) => {
    console.log('Todos', todos);
});


