//require('../config/config');  //app.js 에서 config를 실행하고 있음.
var mongoose = require('mongoose');

//mongoose.connect(process.env.MONGDB_URI);
mongoose.connect( process.env.MONGDB_URI, { useNewUrlParser: true }, (err) => {
    console.log(err);
});

// mongoose.connect( DBCONN_STRING, { useNewUrlParser: true }, (err) => {
//     console.log(err);
// });

mongoose.Promise = global.Promise;

module.exports = {
    mongoose
};