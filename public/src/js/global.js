/*setting clocal storage to save the user key to find out the history*/
GLOBAL = {
	fingerprint: function( ){
		return localStorage.getItem('VOD_U');
	},
	setFingerPrint: function( callback ){
		new Fingerprint2({}).get(function(result){
			localStorage.setItem('VOD_U', result );
			callback( result );
		});
	},

	onFingerprint:function( callback ){
		var key = this.fingerprint();
		if( key )
			callback( key );
		else{
			this.setFingerPrint( callback );
		}
	}
}
/*setting clocal storage to save the user key to find out the history*/