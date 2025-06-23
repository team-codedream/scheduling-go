const { EventDAO } = require('../daos');
const EventDTO = require('../dtos/eventDTO');

// Creates a new event with the given data:
// { userId, calendarId, title, start, end, description, bgcolor }
// Returns an EventDTO
async function create(data) {
  const eventData = await EventDAO.createEvent(data);
  return new EventDTO(eventData);
}

// Updates an existing event identified by ID using the given data:
// { userId, calendarId, title, start, end, description, bgcolor }
async function update(id, data) {
  await EventDAO.updateEvent(id, data);
}

// Returns EventDTO array range of (start, end)
async function findByRange(start, end) {
  // [{ userId, calendarId, title, start, end, description, bgcolor }]
  const eventsData = await EventDAO.getByRange(start, end);
  return eventsData.map(e => new EventDTO(e));
}

// Returns EventDTO on success;
// otherwise, returns null
async function findById(id) {
  // { userId, calendarId, title, start, end, description, bgcolor }
  const eventData = await EventDAO.getById(id);
  return eventData ? new EventDTO(eventData) : null;
}

async function remove(id) {
  await EventDAO.deleteEvent(id);
}

module.exports = {
  findByRange,
  findById,
  create,
  update,
  remove,
}