const UserService = require('../services/userService');

exports.signup = async (req, res, next) => {
  try {
    const { email, nickname, pw, phone } = req.body;
    const userDTO = await UserService.create({ email, nickname, pw, phone });
    res.status(201).json(userDTO);
  } catch (err) { next(err); }
};

exports.signin = async (req, res, next) => {
  try {
    const { email, pw } = req.body;
    const userDTO = await UserService.findByCredentials(email, pw);
    if (!userDTO) {
        return res.status(401).send('Invalid credentials');
    }
    req.session.userId = userDTO.id;
    res.json(userDTO);
  } catch (err) { next(err); }
};

exports.signout = (req, res) => {
  req.session.destroy(err =>
    err ?
    res.status(500).send('Signout failed')
    : res.sendStatus(204));
};
