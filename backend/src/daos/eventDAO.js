const pool = require('../utils/dbPool');

/**
 * EventRow: represents a single record from the 'events' table in the database.
 * @typedef {Object} EventRow
 * @property {number} id           - Auto-generated primary key
 * @property {number} userId       - ID of the user who owns the event
 * @property {number} calendarId   - Identifier for the calendar
 * @property {string} title        - Event title
 * @property {string} start        - ISO timestamp of event start
 * @property {string} end          - ISO timestamp of event end
 * @property {string} description  - Event details
 * @property {string} bgcolor      - Hex color code for event display
 */

/**
 * Insert a new event and return the created record.
 * @param {{ userId: number, calendarId: number, title: string, start: string,
 *           end: string, description: string, bgcolor?: string }} data
 * @returns {Promise<EventRow>}  Resolves with the full inserted event row (including generated id)
 */
async function createEvent(data) {
  const { userId, calendarId, title, start, end, description, bgcolor } = data;
  // [!REQUIRED!] search a newly created record with insertId after INSERT

  /* !This is a sample code!
    const result = await pool.query(
      'INSERT INTO events (userId, calendarId, title, start, end, description, bgcolor) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [ userId, calendarId, title, start, end, description, bgcolor || null ]
    );
    const rows = await pool.query(
      'SELECT * FROM events WHERE id = ?',
      [result.insertId]
    );
    return rows[0];
  */
}

/**
 * Retrieve events within a given date range.
 * @param {string} start  - ISO timestamp lower bound
 * @param {string} end    - ISO timestamp upper bound
 * @returns {Promise<EventRow[]>}  Array of event rows
 */
async function getByRange(start, end) {
  /* !This is a sample code!
    const rows = await pool.query(
      'SELECT * FROM events WHERE start >= ? AND end <= ?',
      [start, end]
    );
    return rows;
  */
}

/**
 * Find an event by its unique ID.
 * @param {number} id
 * @returns {Promise<EventRow|null>}  Resolves with the event row or null if not found
 */
async function getById(id) {
  /* !This is a sample code!
    const rows = await pool.query(
      'SELECT * FROM events WHERE id = ?',
      [id]
    );
    return rows[0] || null;
  */
}

/**
 * Update an existing event by ID.
 * @param {number} id
 * @param {{ calendarId?: string, title?: string, start?: string, 
 *           end?: string, description?: string, bgcolor?: string }} data
 * @returns {Promise<void>}
 */
async function updateEvent(id, data) {
  const { calendarId, title, start, end, description, bgcolor } = data;
  /* !This is a sample code! 
    await pool.query(
      'UPDATE events SET calendarId = ?, title = ?, start = ?, end = ?, description = ?, bgcolor = ? WHERE id = ?',
      [ calendarId, title, start, end, description, bgcolor || null, id ]
    );
  */
}

/**
 * Delete an event by its unique ID.
 * @param {number} id
 * @returns {Promise<void>}
 */
async function deleteEvent(id) {
  /* !This is a sample code!
    await pool.query('DELETE FROM events WHERE id = ?', [id]);
  */
}

module.exports = {
  createEvent,
  getByRange,
  getById,
  updateEvent,
  deleteEvent
};
