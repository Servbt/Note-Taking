
const router = require("express").Router();

router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

router.post("/notes", async (req, res) => {

});

module.exports = router;