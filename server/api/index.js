const router = require('express').Router();

//Map to api files
router.use('/', require('./api'));
module.exports = router;
