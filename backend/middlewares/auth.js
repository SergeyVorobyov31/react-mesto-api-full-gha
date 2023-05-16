const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
require('dotenv').config();

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    next(new UnauthorizedError('Необходима авторизация'));
  }
  const token = req.headers.authorization;
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (e) {
    next(new UnauthorizedError('Необходима авторизация'));
  }

  req.user = payload;
  next();
  return payload;
};
