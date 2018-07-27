require('../config/config');
var mongoose = require('mongoose');

//mongoose.connect(process.env.MONGDB_URI);
mongoose.connect( DBCONN_STRING, { useNewUrlParser: true }, (err) => {
    console.log(err);
});

mongoose.Promise = global.Promise;

module.exports = {
    mongoose
};