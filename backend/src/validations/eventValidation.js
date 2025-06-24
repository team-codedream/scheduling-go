// temp code for testing

// regex-based validation without external library
const isISO = s => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(s);
const isHex = s => /^#([0-9A-F]{3}){1,2}$/i.test(s);

exports.validateEvent = (req, res, next) => {
  const { title, start, end, calendarId, bgcolor } = req.body;
  // [TODO] Check if data matches the regex
  // POST: check all fields
  if (req.method === 'POST') {
    if (!calendarId) {
      return res.status(400).json({ error: 'calendarId required' });
    }
    if (!title) {
      return res.status(400).json({ error: 'title required' });
    }
    if (!start || !isISO(start) || !end || !isISO(end)) {
      return res.status(400).json({ error: 'Invalid dates' });
    }
    if (bgcolor && !isHex(bgcolor)) {
      return res.status(400).json({ error: 'Invalid color' });
    }
    return next();
  }

  // PUT: check only recieve fields
  if (req.method === 'PUT') {
    if (calendarId !== undefined && !calendarId) {
      return res.status(400).json({ error: 'calendarId required' });
    }
    if (title !== undefined && !title) {
      return res.status(400).json({ error: 'title required' });
    }
    if (start !== undefined && !isISO(start)) {
      return res.status(400).json({ error: 'Invalid start date' });
    }
    if (end !== undefined && !isISO(end)) {
      return res.status(400).json({ error: 'Invalid end date' });
    }
    if (bgcolor !== undefined && !isHex(bgcolor)) {
      return res.status(400).json({ error: 'Invalid color' });
    }
    // description is omitted (string|null)
    return next();
  }

  // otherwise; skip
  return next();

}

exports.validateRangeQuery = (req, res, next) => {
    const { start, end } = req.query;
    // TODO: Check if data matches the regex
    if (!start||!end||!isISO(start)||!isISO(end)) {
      return res.status(400).json({ error:'start/end in ISO required' });
    }
    next();
}