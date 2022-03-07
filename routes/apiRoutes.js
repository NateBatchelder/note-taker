// require FS
const fs = require("fs");


// *function to get the data from the database
const editNote = (id, note) => {
    // read the notes.json file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        // parse the data into an object
        const notes = JSON.parse(data);
        // find the note with the matching id
        const noteToEdit = notes.find(note => note.id === id);
        // update the note with the new note
        noteToEdit.title = note.title;
        noteToEdit.text = note.text;
        // write the new notes array to the notes.json file
        fs.writeFile("./db/db.json", JSON.stringify(notes), err => {
            if (err) throw err;
        });
    });
};



// *function to get the data from the database
const getNotes = () => {
    // read the notes.json file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        // parse the data into an object
        const notes = JSON.parse(data);
        // return the notes array
        return notes;
    });
};


// *post routes 
// function to add a note to the database
const addNote = (note) => {
    // read the notes.json file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        // parse the data into an object
        const notes = JSON.parse(data);
        // add the new note to the notes array
        notes.push(note);
        // write the new notes array to the notes.json file
        fs.writeFile("./db/db.json", JSON.stringify(notes), err => {
            if (err) throw err;
        });
    });
};


// *delete routes
// function to delete a note from the database
const deleteNote = (id) => {
    // read the notes.json file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        // parse the data into an object
        const notes = JSON.parse(data);
        // find the note with the matching id
        const noteToDelete = notes.find(note => note.id === id);
        // remove the note from the notes array
        notes.splice(notes.indexOf(noteToDelete), 1);
        // write the new notes array to the notes.json file
        fs.writeFile("./db/db.json", JSON.stringify(notes), err => {
            if (err) throw err;
        });
    });
};


// *put routes
// function to update a note in the database
const updateNote = (id, note) => {
    // read the notes.json file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        // parse the data into an object
        const notes = JSON.parse(data);
        // find the note with the matching id
        const noteToEdit = notes.find(note => note.id === id);
        // update the note with the new note
        noteToEdit.title = note.title;
        noteToEdit.text = note.text;
        // write the new notes array to the notes.json file
        fs.writeFile("./db/db.json", JSON.stringify(notes), err => {
            if (err) throw err;
        });
    });
}


