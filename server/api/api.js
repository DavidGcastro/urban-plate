const router = require('express').Router();
const { Food } = require('../db/models');

//get all Food.
router.get('/', (req, res, next) => {
  Food.findAll()
    .then(foods => res.send(foods))
    .catch(next);
});

// //find campus by id
// campusRouter.get('/:id', (req, res, next) => {
//   let id = req.params.id;
//   Campus.find({ where: { id }, include: [{ model: Student }] })
//     .then(foundCampus => res.send(foundCampus))
//     .catch(next);
// });

// //create a new Campus
// campusRouter.post('/', (req, res, next) => {
//   Campus.create(req.body)
//     .then(created => res.status(201).json(created))
//     .catch(next);
// });

// //delete a campus
// campusRouter.delete('/:id', (req, res, next) => {
//   let id = req.params.id;
//   Campus.destroy({
//     where: { id }
//   })
//     .then(() => res.sendStatus(204))
//     .catch(next);
// });

// campusRouter.put('/:id', (req, res, next) => {
//   let id = req.params.id;
//   // update all pugs whose age is 7 to have an adoptedStatus of true
//   Campus.findById(id)
//     .then(campus => {
//       campus.update(req.body);
//       res.sendStatus(202);
//     })
//     .catch(next);
// });

module.exports = router;
