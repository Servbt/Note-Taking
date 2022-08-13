const router = require('express').Router();

//render homepage
router.get('/home', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }
    // USER INFO
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    const user = userData.get({ plain: true });


    Game.findAll({ offset: 121, limit: 19, })

      .then((dbData) => {

        const games = dbData.map((game) => game.get({ plain: true }));

        res.render('homepage', {
          user,
          games,
          logged_in: req.session.logged_in,
        })
      })

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
