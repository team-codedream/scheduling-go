const API = 'http://localhost:8080';

async function signup({ email, nickname, pw, phone }) {
  const res = await fetch(`${API}/auth/signup`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, nickname, pw, phone })
  });
  if (!res.ok) {
    throw new Error(`Signup failed: ${res.status}`);
  }
  return await res.json(); // { id, email, nickname, phone }
}

async function signin({ email, pw }) {
  const res = await fetch(`${API}/auth/signin`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, pw })
  });
  if (!res.ok) {
    throw new Error('User not found or password is incorrect.');
  }
  return await res.json(); // { id, email, nickname, phone }
}

async function signout() {
  const res = await fetch(`${API}/auth/signout`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include'
  });
  if (!res.ok && res.status !== 204) {
    throw new Error(`Signout failed: ${res.status}`);
  }
}

// GET /users → UserDTO[]
// body: [{id, email, nickname, phone}]
async function listUsers() {
  const res = await fetch(`${API}/users`, { 
    method:'GET',
    mode: 'cors',
    credentials:'include'
  });
  if (!res.ok) {
    throw new Error(`List failed: ${res.status}`);
  }
  return await res.json(); // UserDTO[]
}

// 로그인된 사용자 정보 조회
async function getCurrentUser() {
  const res = await fetch(`${API}/users`, { 
    method: 'GET',
    mode: 'cors',
    credentials: 'include'
  });
  if (!res.ok) {
    throw new Error(`Fetch current user failed: ${res.status}`);
  }
  return await res.json(); // { id, email, nickname, phone }
}

// 사용 예시
// getCurrentUser()
//   .then(user => console.log('Current user:', user))
//   .catch(err => console.error('Error:', err));

// GET /users/:id → UserDTO
// body: {id, email, nickname, phone}
async function getUser(id) {
  const res = await fetch(`${API}/users/${id}`, { 
    method:'GET',
    mode: 'cors',
    credentials:'include'
  });
  if (!res.ok) {
    throw new Error(`Get failed: ${res.status}`);
  }
  return await res.json(); // UserDTO
}

// GET /users/:id/events → EventDTO[]
async function listUserEvents(id) {
  const res = await fetch(`${API}/users/${id}/events`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include'
  });
  if (!res.ok) {
    throw new Error(`List user events failed: ${res.status}`);
  }
  return await res.json(); // EventDTO[]
}

// GET /events?start=&end= → EventDTO[]
// body: [{ calendarId, title, start, end, description?, bgcolor }]
async function listEvents(start, end) {
  const res = await fetch(`${API}/events?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include'
  });
  if (!res.ok) {
    throw new Error(`List events failed: ${res.status}`);
  }
  return await res.json(); // EventDTO[]
}

// GET /events/:id → EventDTO
// body: { calendarId, title, start, end, description?, bgcolor }
async function getEvent(id) {
  const res = await fetch(`${API}/events/${id}`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include'
  });
  if (!res.ok) {
    throw new Error(`Get event failed: ${res.status}`);
  }
  return await res.json(); // EventDTO
}

// POST /events → EventDTO
// body: { calendarId, title, start, end, description?, bgcolor }
async function createEvent(eventData) {
  const res = await fetch(`${API}/events`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(eventData)
  });
  if (!res.ok) {
    throw new Error(`Create event failed: ${res.status}`);
  }
  return await res.json(); // EventDTO
}

// PUT /events/:id → 204 No Content
async function updateEvent(id, eventData) {
  const res = await fetch(`${API}/events/${id}`, {
    method: 'PUT',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(eventData)
  });
  if (!res.ok && res.status !== 204) {
  throw new Error(`Update event failed: ${res.status}`);
  }
}

// DELETE /events/:id → 204 No Content
async function deleteEvent(id) {
  const res = await fetch(`${API}/events/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'include'
  });
  if (!res.ok && res.status !== 204) {
    throw new Error(`Delete event failed: ${res.status}`);
  }
}

export {
  signup,
  signin,
  signout,
  listUsers,
  getUser,
  getCurrentUser,
  listUserEvents,
  listEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent
};

// ex. import { signup } from ...
