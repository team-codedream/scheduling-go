const EventRepository = require('../repositories/eventRepository');

// Gets events range of specific period with [start, end]
// Returns an EventDTO array
async function findByRange(start, end) {
  return await EventRepository.findByRange(start, end);
}

// Gets an existing event by its ID
// Returns EventDTO on success;
// Otherwise, return null
async function findById(id) {
  return await EventRepository.findById(id);
}

// Creates a new event from the given fields:
// { userId, calendarId, title, start, end, description, bgcolor }
// Returns an EventDTO
async function create(data) {
  return await EventRepository.create(data);
}

// Updates an existing event by ID using the following fields:
// { userId, calendarId, title, start, end, description, bgcolor }
async function update(id, data) {
  await EventRepository.update(id, data);
}

// Removes an existing event by its ID
async function remove(id) {
  await EventRepository.remove(id);
}

module.exports = {
  findByRange,
  findById,
  create,
  update,
  remove
};