function ensureAuth(req, res, next) {
  console.log(req.session);
  if (req.session && req.session.userId) {
    return next();
  }
  res.status(401).json({ error: 'Authentication required' });
}

module.exports = { ensureAuth };