const setRateLimit = require("express-rate-limit");
const RateLimitMiddleware = setRateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    status: 'Too many requests'
  },
  headers: true,
});
module.exports = {RateLimitMiddleware};