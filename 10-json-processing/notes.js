const fs = require('fs');
console.log('Notes.js started.');


var addNote = (title, body) => {
    var notes = [];
    var note = { title, body };

    // 1.파일을 읽어서 json 형태의 배열인 notes로 구성, 
    //   파일이 없을 경우를 위해 try catch
    try{
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(e) {
        
    }

    // 2.같은 title 중복 체크 후 notes 저장, 파일 저장
    var duplicateNotes = notes.filter( (note) => note.title === title );

    if( duplicateNotes.length === 0 ){
        notes.push(note);   
        //console.log('note object:', note);
        //console.log('notes object: ', notes);
        //console.log('notes JSON.stringfy:' + JSON.stringify(notes));
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));        
    }
    else {
        console.log('Same title is already exist.')
    }
};

var getAll = () => {
    var notes = [];
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(e) {}

    return JSON.stringify(notes);
};

var getNote = (title) => {
    
    
};

var removeNote = (title) => {
    console.log('Removing note');
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};