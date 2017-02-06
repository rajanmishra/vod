/*controller handling the player start and pause and saving the views*/
app.controller('videoPlayerController', ['$scope','VideoService', 
	function( $scope, VideoService ){
		$scope.startTime = null;
		$scope.params = {
			video:null
		};

		/*decide what need to done when player view is called*/
		$scope.init = function(){
			/*close video modal when video is finished.*/
			$('#video-player-modal video').bind('ended', function() {
   				$('#video-player-modal').modal('hide');
			});

			/*play video when light box is opened*/
			$('#video-player-modal').on('show.bs.modal', function () {
				$('video').trigger('play');
			});
			
			/*stop video when light box is closed*/
			$('#video-player-modal').on('hidden.bs.modal', function () {
				$('video').trigger('pause');
    			$scope.saveLog( );
				document.getElementById('video_container').focus();
			});
		}
		/*decide what need to done when player view is called*/

		/*saving the views for video*/
		$scope.saveLog = function(){
			GLOBAL.onFingerprint( function( key ){
				var log = {
					videoId: $scope.params.video.id,
					fingerPrint: key,
					type:'play_video',
					from: $scope.startTime,
					to: moment().toISOString()
				};

				VideoService.saveLog( log ).then( function( response ){
					/*conole.log('Nothing to pass to the user');*/
				});
			});
		}
		/*saving the views for video*/

		/*changing video source for each video*/
		$scope.loadVideo = function( video ){
			$scope.params.video = video;
			//cannot use angular binding for source url due to url trust policy.
			$('#video-player-modal video').attr('src', video.url );
			
			$('#video-player-modal').modal('show');
			$scope.startTime = moment().toISOString();
		}
		/*changing video source for each video*/

}]);
/*controller handling the player start and pause and saving the views*/