/**
 * (1) 코드 개선
 * (2) add/list 코드 개선
 * (3) logNote 구현, add/list 코드 적용
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
    notes.getNote( argv.title );
} else if( command === 'remove'){
    notes.removeNote(argv.title);
} else {
    console.log('command error.');
}
