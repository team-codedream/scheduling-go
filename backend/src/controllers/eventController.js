const EventService = require('../services/eventService');

exports.listByRange = async (req, res, next) => {
  try {
    const start = req.query.start;
    const end = req.query.end;
    const eventDTOs = await EventService.findByRange(start, end);
    res.json(eventDTOs); 
  }
  catch (e) { next(e); }
};

exports.getById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const eventDTO = await EventService.findById(id);
    if (!eventDTO) { 
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(eventDTO);
  } catch (e) { next(e); }
};

exports.create = async (req, res, next) => {
  try {
    const userId = parseInt(req.session.userId);
    const data = { ...req.body, userId: userId };
    const eventDTO = await EventService.create(data);
    res.status(201).json(eventDTO);
  } catch (e) { next(e); }
};

exports.update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    await EventService.update(id, data);
    res.sendStatus(204);
  } catch (e) { next(e); }
};

exports.remove = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await EventService.remove(id);
    res.sendStatus(204);
  } catch (e) { next(e); }
};