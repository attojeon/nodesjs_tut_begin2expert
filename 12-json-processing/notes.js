const fs = require('fs');
const notesfile = 'notes-data.json';
console.log('Note.js started.');

/**
 * JOSN.parse(json_type_string) : 
 *   (1) getNote 구현
 *   (2) removeNote 구현
 */

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync(notesfile);
        return JSON.parse(notesString); // return js array
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync(notesfile, JSON.stringify(notes));
};


var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = { title, body };

    // 2.같은 title 중복 체크 후 notes 저장, 파일 저장
    var duplicateNotes = notes.filter( (note) => note.title === title );

    if( duplicateNotes.length === 0 ){
        notes.push(note);   
        //console.log('note object:', note);
        //console.log('notes object: ', notes);
        //console.log('notes JSON.stringfy:' + JSON.stringify(notes));
        saveNotes(notes);     
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var allNotes = fetchNotes();
    var filterNotes = allNotes.filter((note) => note.title === title);
    return filterNotes[0];
};

var removeNote = (title) => {
    var allNotes = fetchNotes();
    var filterNotes = allNotes.filter((note) => note.title !== title);
    saveNotes(filterNotes);

    return allNotes.length != filterNotes.length; // return true/false
};

var logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};