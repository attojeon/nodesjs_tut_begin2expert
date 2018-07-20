console.log('app.js started.');

const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes');    // 자체 모듈은 상대위치를 잡아준다.

const argv = yargs.argv;
var command  = process.argv[2];
console.log('Yargs:', argv);
console.log('Command', command);


if( command === 'add') {
    var note = notes.addNote( argv.title, argv.body );
    if( note ){
        console.log("note added : ", note);
    } else {
        console.log('Note title is already exist');
    }

} else if( command === 'list' ) {
    console.log( notes.getAll() );
} else if( command === 'read'){
    notes.getNote( argv.title );
} else if( command === 'remove'){
    notes.removeNote(argv.title);
} else {
    console.log('command error.');
}
