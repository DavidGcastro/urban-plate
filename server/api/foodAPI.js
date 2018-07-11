const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('Hello World');
  next();
});

module.exports = router;
