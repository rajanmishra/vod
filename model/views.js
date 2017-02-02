var mongoose = require('mongoose');  
/*document schema for views*/
var viewSchema = new mongoose.Schema({ 
	videoId:String,
	fingerPrint:String,
	type:String,
	from:{ type: Date, default: Date.now },
	to:{ type: Date, default: Date.now },
	created:{ type: Date, default: Date.now },
	update:{ type: Date, default: Date.now }
});
mongoose.model('View', viewSchema)
