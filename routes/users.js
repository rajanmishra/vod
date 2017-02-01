var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var moment = require('moment');
var utcDate = function(){	
	return new Date( moment().toISOString() );
};

/* GET users listing. */
/*build the REST operations at the base for users
*this will be accessible from http://127.0.0.1:3000/users if the default route for / is left unchanged*/

router.route('/')
    //GET all users
    .get(function(req, res, next) {
        //retrieve all users from Monogo
        mongoose.model('User').find({}, function (err, users) {
              if (err) {
                  return console.error(err);
              } else {
                    res.json(users);
              }     
        });
    })
	
    //POST a new user
    .post(function(req, res) {
		var key = req.body._id;
        var fingerPrint = req.body.fingerPrint;
        var timezoneOffset = req.body.timezoneOffset;
        var userAgent = req.body.userAgent;
		var created = utcDate();
		var updated = created;
        //call the create function for our database
        mongoose.model('User').create({
            _id : key,
            fingerPrint : fingerPrint,
            timezoneOffset : timezoneOffset,
            userAgent : userAgent
        }, function (err, user) {
              if (err) {
					mongoose.model('User').findById(key, function (err, user) {
						if (err) {
							console.log('GET Error: There was a problem retrieving: ' + err);
						} else {
								  res.json(user);
						}
					}); 
              } else {
					console.log('POST creating new user: ' + user);
                    res.json(user);

              }
        });
    });

module.exports = router;
