const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String  // Note: In a real application, you'd store passwords securely using encryption
});

const User = mongoose.model('User', userSchema);

module.exports = User;
