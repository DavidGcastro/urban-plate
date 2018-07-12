const router = require('express').Router();

//Map to api files
router.use('/api', require('./api'));

module.exports = router;
