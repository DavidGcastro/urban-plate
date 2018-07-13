const router = require('express').Router();
const { Food } = require('../db/models');

//get all Food.
router.get('/', (req, res, next) => {
  Food.findAll()
    .then(foods => res.send(foods))
    .catch(next);
});

//find Food by id
router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Food.find({ where: { id } })
    .then(foundFood => res.send(foundFood))
    .catch(next);
});

module.exports = router;
