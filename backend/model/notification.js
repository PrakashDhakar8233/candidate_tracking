const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
  skills: { type: String, required: true },
  logedInuser: { type: String, required: true },
  targets: { type:String, required: true },
  
});

module.exports = mongoose.model('Notifications', notificationSchema);