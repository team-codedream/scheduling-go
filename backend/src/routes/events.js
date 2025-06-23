const router = require('express').Router();
const controller = require('../controllers/eventController');
const validation = require('../validations/eventValidation');
const { listByRange, getById, create, update, remove } = controller;
const { validateEvent, validateRangeQuery } = validation;

router.get('/', validateRangeQuery, listByRange); // serch all events (Date range query support)
router.get('/:id', getById); // search a specific event by id
router.post('/', validateEvent, create); // create a new event
router.put('/:id', validateEvent, update); // update a specific event
router.delete('/:id', remove); // delete a specific event

module.exports = router;