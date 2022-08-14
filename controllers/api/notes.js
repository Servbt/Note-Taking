
const fs = require("fs");
const route = require("../homeRoutes");


route.get("/notes", function (req, res) {
    fs.readFile(__dirname + "/../db/db.json", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
        console.log(data);
    });
});

// I can post in a note on and log it out on the console, but I'm having issues diplaying on page..
    // I need to create a new array and add the created note
        // once I do that I have to update the db.json file so on reload the page will display all the updated reviews
route.post("/notes", function (req, res) {
    let everyNote = [];
    let createdNote = {
        title: req.body.title,
        text: req.body.text,
    }
    console.log(createdNote);
})

module.exports = route;
