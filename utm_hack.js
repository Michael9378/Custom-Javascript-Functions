<script>
jQuery(document).ready(function(){
	// grabs the utm's from a url and add them to hidden fields in a .utm_sources div
	// see if there are any params
	if( window.location.href.indexOf("?")!= -1 ) {
		// split the params
		var paramsUnsplit = window.location.href.split("?")[1].split("&");
		// loop through the params and grab the key and values
		for(var i = 0; i < paramsUnsplit.length; i++) {
			var key = paramsUnsplit[i].split("=")[0];
			var value = paramsUnsplit[i].split("=")[1];
			// if it is a utm param, append it to the utm div.
			if( key.indexOf('utm')!= -1 ) {
				// this is a utm, append it to utm box
				jQuery(".utm_sources").append('<input type="hidden" name="' + key + '" value="' + value + '">');
			}
		}
	}
});
</script>