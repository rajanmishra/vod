/*controller to show the viewing history*/
app.controller('videoViewsController', ['$scope','VideoService', 
	function( $scope, VideoService ){
		$scope.params = {};
		/*video data to show details in history*/
		$scope.videoslist = function(response){ 
					var index = 0;
					return _.map( response.data.entries, function( video ){
					if(video.images && video.images.length > 0 ) 
						video.imgUrl = video.images[0].url;
					video.imgUrl = video.imgUrl || CONFIG.DEFAULT_VIDEO_TILE;
					video.url = video.contents[0].url;
					video.title = video.title.trim();
					video.name = video.title.length > 20? video.title.substr(0, 20) + '...' : video.title;
					video.slug = video.title.trim().replace(/\s+/g, '-').toLowerCase();
					video.index = index;
					index++;
					return video;
					});
		}	
		/*video data to show details in history*/
		
		/*fetch video viewing history on based of user key*/
		$scope.showHistory = function( ){
			GLOBAL.onFingerprint( function( key ){				
				VideoService.videosViewHistory({ fingerPrint:key }, {}).
					then( function( response ){
						$scope.setHistoryView( response.data) ;
				});
			});
		}
		/*fetch video viewing history on based of user key*/
		
		/*play again the viewed video*/
		$scope.play = function(){
			angular.element('#video-player-modal').scope().
				loadVideo( _.where( GLOBAL.videos, { id: this.log.videoId })[0] );
		}
		/*play again the viewed video*/

		
		/*send all formatted values to view*/
		$scope.setHistoryView = function( logs){
			VideoService.videos().then( function( response ){
			GLOBAL.videos = $scope.videoslist(response);	
			var video;
			$scope.params.logs = _.map( logs, function( log ){
				
					video = _.where( GLOBAL.videos, { id: log.videoId })[0];
					log = _.extend( log, { 
						imgUrl: video.imgUrl, 
						videoUrl: video.url, 
						title: video.title,
						description: video.description,
						date: moment( log.from ).format('lll') ,
						duration: $scope.humanizedDuration( moment( log.from ), moment( log.to ) )
					});

					return log;

				});

			});
		}
		/*send all formatted values to view*/

		/*format the date to show viewing time in minutes and seconds */
		$scope.humanizedDuration = function( from , to ){
			var diff =  to.diff(from, 'minutes');
			if( diff > 1 )
				return diff + ' mins';

			return to.diff(from, 'seconds') + ' seconds';
		}
		/*format the date to show viewing time in minutes and seconds */
}]);
/*controller to show the viewing history*/