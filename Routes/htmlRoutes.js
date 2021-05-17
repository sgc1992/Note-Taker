
const path = require('path');

module.exports = (app) => {
    // directs user to notes page of app
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));

    });
    // directs user to home page of app
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};