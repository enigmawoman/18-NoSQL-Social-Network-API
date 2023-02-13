// index document is how the routes and controllers can easily reference the models without have to require each model file separately
const User = require('./User');
const Thought = require('./Thought');

module.exports = { User, Thought };
