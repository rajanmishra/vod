var mongoose = require('mongoose');  
var userSchema = new mongoose.Schema({ 
  _id :  String,
  fingerPrint: String,
  timezoneOffset: String,
  userAgent: String,
  created:{ type: Date, default: Date.now },
  updated:{ type: Date, default: Date.now }
});
mongoose.model('User', userSchema)
