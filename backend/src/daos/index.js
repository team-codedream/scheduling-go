let UserDAO, EventDAO;

if (process.env.NODE_ENV === 'test') {
  UserDAO  = require('./inMemoryUserDAO');
  EventDAO = require('./inMemoryEventDAO');
} else {
  UserDAO  = require('./userDAO');
  EventDAO = require('./eventDAO');
}

module.exports = { UserDAO, EventDAO };