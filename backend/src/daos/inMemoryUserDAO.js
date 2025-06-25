// In-memory implementation of userDAO for testing purposes
// using Map and built-in crypto UUIDs.
// Same method signatures as the real userDAO.
const { getByRange: getAllEvents } = require('./inMemoryEventDAO');
const users = new Map(); // store user with global map (key: UUID) for testing
let nextUserId = 1;

/**
 * @typedef {Object} UserRow
 * @property {number} id
 * @property {string} email
 * @property {string} nickname
 * @property {string} pw
 * @property {string} phone
 */

/**
 * @param {{ 
 *  email: string,
 *  nickname: string,
 *  pw: string,
 *  phone: string
 * }} data
 * @returns {Promise<UserRow>}
 */
async function createUser(data) {
  const { email, nickname, pw, phone } = data;
  const id = nextUserId++;
  const newUser = { id, email, nickname, pw, phone };
  users.set(id, newUser);
  console.log(users.values());
  return newUser;
}

/**
 * @param {string} email
 * @returns {Promise<UserRow|null>}
 */
async function getByEmail(email) {
  const values = users.values();
  for (const user of values) {
    if (user.email === email) {
      return user;
    }
  }
  return null;
}

/**
 * @returns {Promise<UserRow[]>}
 */
async function getAllUsers() {
  return Array.from(users.values());
}

/**
 * @param {number} id
 * @returns {Promise<UserRow|null>}
 */
async function getById(id) {
  return users.get(id) || null;
}

/**
 * @param {number} userId
 * @returns {Promise<Object[]>}  Array of EventRow objects
 */
async function getUserEvents(userId) {
  const start = '1970-01-01T00:00:00.000Z';
  const end = '9999-12-31T23:59:59.999Z';
  const all = await getAllEvents(start, end);
  return all.filter(e => e.userId === userId);
}

// method for testing purpose
async function clear() {
  users.clear();
}

module.exports = {
  createUser,
  getByEmail,
  getAllUsers,
  getById,
  getUserEvents
};