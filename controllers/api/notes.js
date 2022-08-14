
const router = require("express").Router();

router.get('/notes', (req, res) => {
    readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});

router.post("/notes", async (req, res) => {

});

module.exports = router;