
const fs = require("fs");
const  route  = require("../homeRoutes");


 route.get("/notes", function (req, res) {
        fs.readFile(__dirname + "/../db/db.json", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
        console.log(data);
        });
    });
  
module.exports = route;
