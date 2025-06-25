// supertest + jest

const request = require('supertest');
const app = require('../../src/app');
const { users, events } = require('../data/dummyData'); // load dummy data
const { UserDAO, EventDAO } = require('../../src/daos'); // load DAO factory for testing
const UserService = require('../../src/services/userService');

describe('API Integration Tests', () => {
  let cookie; // will be used for authorization

  beforeAll(async () => {
    // force test mode and clear+seed in‐memory DAOs
    process.env.NODE_ENV = 'test';
    if (UserDAO.clear)  { UserDAO.clear(); }
    if (EventDAO.clear) { EventDAO.clear(); }

    // seed users via Service (store as hashed pw)
    for (const user of users) {
      const userDTO = await UserService.create(user);
    }

    // seed events
    for (const event of events) {
      const eventDTO = await EventDAO.createEvent(event);
    }

    // sign in first user for protected routes
    const res = await request(app)
      .post('/auth/signin')
      .send({ email: users[0].email, pw: users[0].pw });
    expect(res.status).toBe(200);
    cookie = res.headers['set-cookie'];
  });

  describe('Auth Routes', () => {
    test('POST /auth/signup → 201 + user DTO', async () => {
      const newUser = {
        email: 'dave@example.com',
        nickname: 'dave',
        pw: 'test789',
        phone: '01099998888'
      };
      const res = await request(app)
        .post('/auth/signup')
        .send(newUser);
      expect(res.status).toBe(201);
      expect(res.body).toMatchObject({
        id: expect.any(Number),
        email: newUser.email,
        nickname: newUser.nickname,
        phone: newUser.phone
      });
    });

    test('POST /auth/signout → 204', async () => {
      const res = await request(app)
        .post('/auth/signout')
        .set('Cookie', cookie);
      expect(res.status).toBe(204);
    });
  });

  describe('User Routes (protected)', () => {
    beforeAll(async () => {
      // re‐signin after signout
      const res = await request(app)
        .post('/auth/signin')
        .send({ email: users[0].email, pw: users[0].pw });
      cookie = res.headers['set-cookie'];
    });

    test('GET /users → current user DTO', async () => {
      const res = await request(app)
      .get('/users')
      .set('Cookie', cookie);
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        id: users[0].id,
        email: users[0].email,
        nickname: users[0].nickname,
        phone: users[0].phone
      });
    });

    test('GET /users/:id → single user DTO', async () => {
      const target = users[1];
      const res = await request(app)
        .get(`/users/${target.id}`)
        .set('Cookie', cookie);
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        id:       target.id,
        email:    target.email,
        nickname: target.nickname,
        phone:    target.phone
      });
    });

    test('GET /users/:id/events → events for user', async () => {
      const target = users[0];
      const res = await request(app)
        .get(`/users/${target.id}/events`)
        .set('Cookie', cookie);
      expect(res.status).toBe(200);
      const expected = events
        .filter(e => e.userId === target.id)
        .map(e => ({
          id:         e.id,
          userId:     e.userId,
          calendarId: e.calendarId,
          title:      e.title,
          start:      e.start,
          end:        e.end,
          description:e.description,
          bgcolor:    e.bgcolor
        }));
      expect(res.body).toEqual(expect.arrayContaining(expected));
    });
  });

  describe('Event Routes (protected)', () => {
    beforeAll(async () => {
      // ensure we have fresh cookie
      const res = await request(app)
        .post('/auth/signin')
        .send({ email: users[1].email, pw: users[1].pw });
      cookie = res.headers['set-cookie'];
    });

    test('GET /events?start=&end= → listByRange', async () => {
      const { start, end } = events[2];
      const res = await request(app)
        .get(`/events?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`)
        .set('Cookie', cookie);
      expect(res.status).toBe(200);
      expect(res.body).toEqual([
        expect.objectContaining({
          id:     events[2].id,
          userId: events[2].userId
        })
      ]);
    });

    test('GET /events/:id → getById', async () => {
      const target = events[3];
      const res = await request(app)
        .get(`/events/${target.id}`)
        .set('Cookie', cookie);
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        id:         target.id,
        userId:     target.userId,
        calendarId: target.calendarId,
        title:      target.title
      });
    });

    let newEventId;
    const newEvent = {
      calendarId: 500,
      title:      'Test Event',
      start:      '2025-07-01T10:00:00.000Z',
      end:        '2025-07-01T11:00:00.000Z',
      description:'Integration test event',
      bgcolor:    '#123456'
    };

    test('POST /events → create', async () => {
      const res = await request(app)
        .post('/events')
        .set('Cookie', cookie)
        .send(newEvent);
      expect(res.status).toBe(201);
      expect(res.body).toMatchObject({
        id:         expect.any(Number),
        userId:     users[1].id,
        calendarId: newEvent.calendarId,
        title:      newEvent.title
      });
      newEventId = res.body.id;
    });

    test('PUT /events/:id → update', async () => {
      const updated = { title: 'Updated Title' };
      const res = await request(app)
        .put(`/events/${newEventId}`)
        .set('Cookie', cookie)
        .send(updated);
      expect(res.status).toBe(204);

      const getRes = await request(app)
        .get(`/events/${newEventId}`)
        .set('Cookie', cookie);
      expect(getRes.body.title).toBe(updated.title);
    });

    test('DELETE /events/:id → remove', async () => {
      const res = await request(app)
        .delete(`/events/${newEventId}`)
        .set('Cookie', cookie);
      expect(res.status).toBe(204);

      const getRes = await request(app)
        .get(`/events/${newEventId}`)
        .set('Cookie', cookie);
      expect(getRes.status).toBe(404);
    });
  });
});