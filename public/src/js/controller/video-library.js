
/*video library controller fetches video from api*/
app.controller('videoController', ['$scope','VideoService', function( $scope, VideoService ){
	
	$scope.params = {};
	$scope.scrollPos = 0;
	$scope.scrollWidth = 800;
	$scope.selectedVideo = {};
	$scope.selectedVideo.index = 0;	
	
	/*button handelers to handlekeyboard events*/
	var _keysHandler = {
		//NEXT
		39: function(){
			if( $scope.selectedVideo.index < $scope.params.videos.length - 1 )
				$scope.selectVideo( $scope.params.videos[ $scope.selectedVideo.index + 1 ]);
		}, 
		//PREV
		37:function(){
			if( $scope.selectedVideo.index > 0 )
				$scope.selectVideo( $scope.params.videos[ $scope.selectedVideo.index - 1 ]);
		},
		//PLAY
		13: function(){
			if($scope.selectedVideo)
				$scope.play( $scope.selectedVideo ); 
		}
	};
	/*button handelers to handlekeyboard events*/

	/*on start initilize default to save user presence and show video listings*/
	$scope.init = function(){
		
		$scope.setFingerPrint();
		$scope.showVideoBar();
		
	}
	/*on start initilize default to save user presence and show video listings*/
	
	/*handle key events*/
	$scope.onKeyDown = function(  $event ){
		if( _keysHandler[$event.keyCode])
			_keysHandler[$event.keyCode]();
	}
	/*handle key events*/
	
	/*bring video in focus so that it can be played using keyboard*/
	$scope.selectVideo = function( video ){
		if($scope.selectedVideo )
			$scope.selectedVideo.selectedClass = '';
		
		/*add selected class*/
		$scope.selectedVideo = video || this.video;
		$scope.selectedVideo.selectedClass = 'video-selected';
		$scope.selectedVideo.index= video.index;

		//auto scroll screen based on selected video position
		var positionRatio = $('#vid_' + $scope.selectedVideo.id ).offset().left/$('body').width();

		if( positionRatio < 0.2 )
			$scope.scroll('LEFT');
		else if( positionRatio > 0.8 )
			$scope.scroll('RIGHT');

	}
	/*bring video in focus so that it can be played using keyboard*/
	
	/*play the video in video player*/
	$scope.play = function( video ){
		angular.element('#video-player-modal').scope().loadVideo( video || this.video );
	}
	/*play the video in video player*/
	
	/*send api request to node server for saving user*/
	$scope.setFingerPrint = function(){
		var fingerPrint = GLOBAL.fingerprint();
		if( !fingerPrint ){
			GLOBAL.setFingerPrint( function( key ){
				VideoService.saveUser( key ).then( function( response ){
				});
			});
		}
	}
	/*send api request to node server for saving user*/

	
	/*format the data from the video api*/
	$scope.showVideoBar = function(){
		VideoService.videos().then( function( response ){
			var index = 0;
			$scope.params.videos = _.map( response.data.entries, function( video ){
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

			GLOBAL.videos = $scope.params.videos;

		});
	}
	/*format the data from the video api*/

	/*slide the slider by deciding the directions*/
	$scope.scroll = function( direction ){
		if( direction == 'LEFT'){
			$scope.scrollPos -= $scope.scrollWidth;
		}
		else{
			$scope.scrollPos += $scope.scrollWidth;
		}

		$('#slide-container').animate({
            scrollLeft: $scope.scrollPos
        },100);
	}
	/*slide the slider by deciding the directions*/
	
	/*slider next and previous button*/
	$scope.nav = function( direction ){
		if( direction == 'LEFT'){
			if( $scope.selectedVideo.index > 0 )
				$scope.selectVideo( $scope.params.videos[ $scope.selectedVideo.index - 1 ]);
		}
		else{
			if( $scope.selectedVideo.index < $scope.params.videos.length - 1 )
				$scope.selectVideo( $scope.params.videos[ $scope.selectedVideo.index + 1 ]);
		}

	}
	/*slider next and previous button*/	

	/*bring the div in focus so next and previous from keyboard works*/
	setTimeout(function() {
	document.getElementById('video_container').focus();
	document.getElementById('left_button').click();
	}, 5000);
	/*bring the div in focus so next and previous from keyboard works*/

}]);

