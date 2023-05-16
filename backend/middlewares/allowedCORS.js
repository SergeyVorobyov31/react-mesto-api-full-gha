// const allowedCors = [
//   'http://mesto.net.nomoredomains.monster/',
//   'https://mesto.net.nomoredomains.monster/',
//   'http://localhost:3000',
//   'https://api.mesto.net.nomoredomains.monster/',
//   'http://api.mesto.net.nomoredomains.monster/',
// ];

// module.exports = (req, res, next) => {
//   const { origin } = req.headers;
//   const { method } = req;
//   const requestHeaders = req.headers['access-control-request-headers'];
//   const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

//   if (allowedCors.includes(origin)) {
//     res.headers('Access-Control-Allow-Origin', origin);
//   }

//   if (method === 'OPTIONS') {
//     res.headers('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
//     res.headers('Access-Control-Allow-Headers', requestHeaders);
//     return res.end();
//   }

//   return next();
// };
