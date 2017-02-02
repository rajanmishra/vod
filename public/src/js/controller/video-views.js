

app.controller('videoViewsController', ['$scope','VideoService', 
	function( $scope, VideoService ){
		$scope.params = {};
		
		$scope.showHistory = function( ){
			GLOBAL.onFingerprint( function( key ){
				VideoService.videosViewHistory({ fingerPrint:key }, {}).
					then( function( response ){
						$scope.setHistoryView( response.data ) ;
				});
			});
		}

		$scope.play = function(){
			angular.element('#video-player-modal').scope().
				loadVideo( _.where( GLOBAL.videos, { id: this.log.videoId })[0] );
		}

		$scope.setHistoryView = function( logs ){
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
		}

		$scope.humanizedDuration = function( from , to ){
			var diff =  to.diff(from, 'minutes');
			if( diff > 1 )
				return diff + ' mins';

			return to.diff(from, 'seconds') + ' seconds';
		}
}]);