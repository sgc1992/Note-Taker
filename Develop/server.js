// Require Dependencies
const express = require("express");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 8080;

// Setup data parsing
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname));

//Require routes file
require('./Routes/apiRoutes.js')(app);
require('./Routes/htmlRoutes.js')(app);
// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})
