/*service to fetch the video, history from API and saving them GET and POST request*/
app.factory('VideoService', [ '$http', function( $http ) {

	return {

		/*fetch the video from the API*/
		videos: function(){
			return $http.get( CONFIG.MOVIES_API + '/movies');
		},
		
		/*save the viwing history for videos*/
		saveLog: function( log ){
			return $http.post( CONFIG.SERVICE_API + '/views', log );
		},
		
		/*Fetch the viewed history*/
		videosViewHistory: function( params, options ){
			return $http.post( CONFIG.SERVICE_API + '/views/me', { params: params, options: options });
		},
		
		/*create the user or get user if already user send user information */
		saveUser: function( key ){
			var user = {
				_id: key,
        		fingerPrint:key,
        		timezoneOffset: (new Date()).getTimezoneOffset(),
        		userAgent: window.navigator.userAgent
			};

			return $http.post( CONFIG.SERVICE_API + '/users', user );
		}
		/*create the user or get user if already user send user information */
	}
}]);
/*service to fetch the video, history from API and saving them GET and POST request*/