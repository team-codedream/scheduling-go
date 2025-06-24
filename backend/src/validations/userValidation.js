// temp code for testing

// regex-based validation without external library
const isEmail = s => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const isPhone = s => /^\d{9,11}$/.test(s);

exports.validateSignup = (req, res, next) => {
  const { email, nickname, pw, phone } = req.body;
  // [TODO] Check if data matches the regex
  if (!email||!isEmail(email)) {
    return res.status(400).json({ error:'Invalid email' });
  }
  if (!nickname) {
    return res.status(400).json({ error:'Nickname required' });
  }
  if (!pw||pw.length<6) {
    return res.status(400).json({ error:'Password too short' });
  }
  if (!phone||!isPhone(phone)) {
    return res.status(400).json({ error:'Invalid phone' });
  }
  next();
}

exports.validateSignin = (req, res, next) => {
  const { email, pw } = req.body;
  // TODO: Check if data matches the regex
  if (!email||!isEmail(email)) {
    return res.status(400).json({ error:'Invalid email' });
  }
  if (!pw) {
    return res.status(400).json({ error:'Password required' });
  }
  next();
}