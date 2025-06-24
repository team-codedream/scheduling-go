/**
 * Dummy data for testing CRUD operations.
 */

const users = [
  {
    id: 1,
    email: 'alice@example.com',
    nickname: 'alice',
    pw: 'password123',
    phone: '01012345678'
  },
  {
    id: 2,
    email: 'bob@example.com',
    nickname: 'bob',
    pw: 'secure!456',
    phone: '01087654321'
  },
  {
    id: 3,
    email: 'carol@example.com',
    nickname: 'carol',
    pw: 'pa$$w0rd',
    phone: '01055556666'
  }
];

const events = [
  {
    id: 1,
    userId: 1,
    calendarId: 100,
    title: 'Project Kickoff',
    start: '2025-06-01T09:00:00.000Z',
    end: '2025-06-01T10:00:00.000Z',
    description: 'Initial meeting with the team',
    bgcolor: '#ff0000'
  },
  {
    id: 2,
    userId: 1,
    calendarId: 100,
    title: 'Design Review',
    start: '2025-06-02T14:00:00.000Z',
    end: '2025-06-02T15:30:00.000Z',
    description: 'Review UI/UX designs',
    bgcolor: '#00ff00'
  },
  {
    id: 3,
    userId: 2,
    calendarId: 200,
    title: 'Client Call',
    start: '2025-06-03T11:00:00.000Z',
    end: '2025-06-03T12:00:00.000Z',
    description: null,
    bgcolor: '#0000ff'
  },
  {
    id: 4,
    userId: 3,
    calendarId: 300,
    title: 'Code Workshop',
    start: '2025-06-04T08:30:00.000Z',
    end: '2025-06-04T10:00:00.000Z',
    description: 'Hands-on coding session',
    bgcolor: '#ff00ff'
  }
];

module.exports = { users, events };