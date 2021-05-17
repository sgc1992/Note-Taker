const { uuid } = require('uuidv4');
const notes = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {

    // get notes from db.json
    app.get('/api/notes', function (req, res) {
        res.json(notes)
    });
    //updates db.json with new note
    app.post('/api/notes', function (req, res) {
        data = req.body;
        // adds id to note
        data.id = uuid();
        notes.push(req.body);
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), err => {
            if (err) {
                console.error(err)
                return
            }
            res.json(true);
        });
    })
    //filters the note notes that we want to keep the writes a new db json
    app.delete('/api/notes/:id', function (req, res) {
        id = req.params.id
        // filters the notes we want to keep and updates db json
        result = notes.filter(note => note.id !== id);
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(result), err => {
            if (err) {
                console.error(err)
                return
            }
            console.log('SUCCESFULLY WROTE TO THE FILE');
        })
        res.json(true);
    })
};