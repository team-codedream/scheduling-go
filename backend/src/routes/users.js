const router = require('express').Router();
const controller = require('../controllers/userController');
const { list, getById, listEvents } = controller;

router.get('/', list); // search all users
router.get('/:id', getById); // search a specific user by id
router.get('/:id/events', listEvents); // search all events of specific user

module.exports = router;