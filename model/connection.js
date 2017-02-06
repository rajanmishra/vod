var mongoose = require('mongoose');
/*MONGODB_URI* added by heroku for your app can be changed while working on local i.e. 'mongodb://localhost/video' here video is database name*/
mongoose.connect(process.env.MONGODB_URI);




