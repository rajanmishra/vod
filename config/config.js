/*configuration variable server host port, mongodb host local production*/
module.exports = {

	nodeServer:{
		host:'localhost',
		port:3000
	},	
	
	dbLocal: {
		mongo: {
			url: 'localhost:27017',
			database: 'video1'
		}
	},
 
	dbProduction: {
		mongo: {
			url: 'sa:1qaz2wsx@ds037155.mlab.com:37155',
			database: 'vod'
		}
	},
	logger: {
		api: 'logs/api.log',
		exception: 'logs/exceptions.log'
	}
};
