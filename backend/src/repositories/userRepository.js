const { UserDAO } = require('../daos');
const UserDTO  = require('../dtos/userDTO');
const EventDTO = require('../dtos/eventDTO');

// Creates a new user with the given data:
// { email, nickname, pw, phone }
// Returns an UserDTO
async function create(data) {
  // { id, email, nickname, pw, phone }
  const userData = await UserDAO.createUser(data);
  return new UserDTO(userData);
}

// Returns { id, email, nickname, pw, phone } on success
// Otherwise, return null
function findByEmailRaw(email) {
  return UserDAO.getByEmail(email);
}

// Returns an UserDTO array
async function findAll() {
  // [{ id, email, nickname, pw, phone }]
  const usersData = await UserDAO.getAllUsers();
  return usersData.map(u => new UserDTO(u));
}

// Returns an UserDTO on success;
// Otherwise, returns null
async function findById(id) {1
  // { id, email, nickname, pw, phone }
  const userData = await UserDAO.getById(id);
  return userData ? new UserDTO(userData) : null;
}

// Returns an EventDTO array
async function findEvents(userId) {
  // [{ id, email, nickname, pw, phone }]
  const eventsData = await UserDAO.getUserEvents(userId);
  return eventsData.map(e => new EventDTO(e));
}

module.exports = {
  create,
  findByEmailRaw,
  findAll,
  findById,
  findEvents
};