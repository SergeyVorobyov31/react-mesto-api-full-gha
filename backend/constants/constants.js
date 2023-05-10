const crypto = require('crypto');

const randomSecretKey = crypto.randomBytes(16).toString('hex');
console.log(randomSecretKey);

module.exports = randomSecretKey;
