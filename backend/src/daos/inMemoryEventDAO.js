const events = new Map(); // store event with global map (key: UUID) for testing
let nextEventId = 1;

/**
 * In-memory implementation of eventDAO for testing purposes using Map and built-in crypto UUIDs.
 * Same method signatures as the real eventDAO.
 */

/**
 * @typedef {Object} EventRow
 * @property {number} id
 * @property {number} userId
 * @property {number} calendarId
 * @property {string} title
 * @property {string} start
 * @property {string} end
 * @property {string|null} description
 * @property {string} bgcolor
 */

/**
 * @param {{ 
 *  userId: number,
 *  calendarId: number,
 *  title: string,
 *  start: string,
 *  end: string,
 *  description: string,
 *  bgcolor: string 
 * }} data
 * @returns {Promise<EventRow>}
 */
async function createEvent(data) {
  const { userId, calendarId, title, start, end, description, bgcolor } = data;
  const id = nextEventId++;
  const newEvent = { id, userId, calendarId, title, start, end, description, bgcolor };
  console.log("newEvent", newEvent);
  events.set(id, newEvent);
  return newEvent;
}

/**
 * @param {string} start
 * @param {string} end
 * @returns {Promise<EventRow[]>}
 */
async function getByRange(start, end) {
  return Array.from(events.values())
              .filter(e => e.start >= start && e.end <= end);
}

/**
 * @param {number} id
 * @returns {Promise<EventRow|null>}
 */
async function getById(id) {
  return events.get(id) || null;
}

/**
 * @param {number} id
 * @param {{ 
 *  calendarId?: number,
 *  title?: string,
 *  start?: string,
 *  end?: string,
 *  description?: string,
 *  bgcolor?: string 
 * }} data
 * @returns {Promise<void>}
 */
async function updateEvent(id, data) {
  const existing = events.get(id);
  if (!existing) return;
  const updated = {
    ...existing,
    ...data,
    description: data.description !== undefined
    ? data.description // allow null
    : existing.description 
  };
  events.set(id, updated);
}

/**
 * @param {number} id
 * @returns {Promise<void>}
 */
async function deleteEvent(id) {
  events.delete(id);
}

// method for testing purpose
async function clear() {
  events.clear();
}

module.exports = {
  createEvent,
  getByRange,
  getById,
  updateEvent,
  deleteEvent
};