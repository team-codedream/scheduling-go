const UserService = require('../services/userService');

exports.list = async (req, res, next) => {
  try {
    const userDTOs = await UserService.findAll();
    res.json(userDTOs);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const userDTO = await UserService.findById(id);
    if (!userDTO) {
      return res.status(404).send('User not found');
    }
    res.json(userDTO);
  } catch (err) { next(err); }
};

exports.listEvents = async (req, res, next) => {
  try {
    const id = parseInt(req.session.userId);
    const eventDTOs = await UserService.findEvents(id);
    res.json(eventDTOs);
  } catch (err) { next(err); }
};