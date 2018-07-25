/**
 * (1) getNote 구현, array.filter 사용
 * (2) remove 구현 
 */
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
        notes.logNote(note);
    } else {
        console.log('Note title is already exist');
    }

} else if( command === 'list' ) {
    var allNotes = notes.getAll();
    console.log(`All notes: ${allNotes.length}`);
    allNotes.forEach( (note) => {
        notes.logNote(note);
    });
} else if( command === 'read'){
    var note = notes.getNote( argv.title );
    if( note ) {
        notes.logNote(note);
    }
    else {
        console.log('Notes not found');
    }
} else if( command === 'remove'){
    var ret = notes.removeNote(argv.title);
    var message = ret ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('command error.');
}
