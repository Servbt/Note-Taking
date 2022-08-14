
const fs = require("fs");
const  route  = require("../homeRoutes");


 route.get("/api/notes", function (req, res) {
        fs.readFile(__dirname + "/../db/db.json", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
        });
    });
  
module.exports = route;
