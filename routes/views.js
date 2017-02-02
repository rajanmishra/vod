var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var moment = require('moment');
var utcDate = function(){	
	return new Date( moment().toISOString() );
};


/*build the REST operations at the base for views
*this will be accessible from http://127.0.0.1:3000/views 
*if the default route for / is left unchanged
*/

router.route('/')
    //GET all views
    .get(function(req, res, next) {
        //retrieve all views from Monogo
        mongoose.model('View').find({}, function (err, views) {
              if (err) {
                  return console.error(err);
              } else {
                    res.json(views);
              }     
        });
    })
	
    //POST a new view
    .post(function(req, res) {
		var videoId     = req.body.videoId;
		var fingerPrint = req.body.fingerPrint;
		var type        = req.body.type;
		var from        = req.body.from;
		var to          = req.body.to;
		var created     = utcDate();
		var update      = created;
        //call the create function for our database
        mongoose.model('View').create({
            videoId     : videoId,
            fingerPrint : fingerPrint,
            type        : type,
            from        : from,
			to          : to,
			created     : created,
			update      : update,
        }, function (err, view) {
              if (err) {
						console.log('GET Error: There was a problem retrieving: ' + err);
					 
              } else {
					console.log('POST creating new view: ' + view);
                    res.json(view);

              }
        });
    });
	
 /*fetch view with referrence to each key*/	
router.route('/me')
	.post(function(req, res, next) {
		
		var params  = req.body.params;
		var options = req.body.options;
		
		options = options || {};

		options.sort = options.sort || { created: -1 };
		options.skip = options.skip || 0;
		options.limit = options.limit || 50;
        //retrieve all views from Monogo
        mongoose.model('View').find(params, function (err, views) {
              if (err) {
                  return console.error(err);
              } else {
                    res.json(views);
              }     
        });
    });
	/*fetch view with referrence to each key*/	

module.exports = router;
