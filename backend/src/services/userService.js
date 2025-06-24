const bcrypt = require('bcryptjs');
const UserRepository = require('../repositories/userRepository');
const UserDTO = require('../dtos/userDTO');

// Creates a new user from the given fields:
// { email, nickname, pw, phone }
// Returns UserDTO
async function create(data) {
  // hashing password
  const hash = await bcrypt.hash(data.pw, 10);
  return await UserRepository.create({ ...data, pw: hash });
}

// Gets a user by credentials, with both email and pw
// Returns UserDTO on success; 
// Otherwise, returns null
async function findByCredentials(email, pw) {
  // search raw user data(include pw)
  // { id, email, nickname, pw, phone }
  const raw = await UserRepository.findByEmailRaw(email);

  // verify password
  // if success to sign in, return userDTO
  if (raw && await bcrypt.compare(pw, raw.pw)) {
    return new UserDTO(raw);
  }

  // otherwise, return null
  return null;
}

// Gets all existing users
// Returns UserDTO array
function findAll() {
  return UserRepository.findAll();
}

// Gets an existing user by ID
// Returns UserDTO on success; otherwise, return null
function findById(id) {
  return UserRepository.findById(id);
}

// Gets all events of an exisiting user by ID
// Returns EventDTO array
function findEvents(userId) {
  return UserRepository.findEvents(userId);
}

module.exports = {
  create,
  findByCredentials,
  findAll,
  findById,
  findEvents
};