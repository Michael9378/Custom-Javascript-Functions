function checkForBrokenUrls(){
	// check for jquery before we start.
	if( typeof jQuery == "undefined" ) {
		console.log("jQuery isn't loaded on the page. Loading in and checking again.");
		var jquery_cdn = document.createElement("script");
		jquery_cdn.setAttribute("src","https://code.jquery.com/jquery-3.1.1.min.js");
		document.body.prepend(jquery_cdn);
		// recall function after some time to make sure jQuery was loaded
		setTimeout(function(){ checkForBrokenUrls(); },250);
	}
	else {
		// get all anchors and images to check the links
		var links = jQuery("a, img");
		// array for checking
		var urls = [];
		// loop through all a and img elements and grab the urls
		for(var i = 0; i < links.length; i++ ) {
			if( links[i].src )
				urls.push( [links[i].innerHTML, links[i].src] );
			if( links[i].href )
				urls.push( [links[i].innerHTML, links[i].href] );
		}

		// count to stop when we are done checking all the links
		var count = urls.length;
		// broken urls array to hold all the broken urls we find
		brokenUrls = [];

		// loop through all the urls and ajax call to see if 404
		for( var i = 0; i < urls.length; i++ ){
			// ajax call the url
			jQuery.ajax({ cache: false,
				url: urls[i][1],
				index: i,
				// if there is a 404 error, add the url to the broken url array
			  error: function (xhr, ajaxOptions, thrownError){
			    if(xhr.status==404) {
			    	brokenUrls.push( urls[this.index] );
			    }
				},
				// in any case, decrement count and update console so we know we aren't stuck 
			  complete: function(){
			  	if( !(--count) ) {
			  		// we're done, call the done searching function
			  		doneSearching(brokenUrls);
			  	}
			  	else {
				  	console.log(count + " links and images left to check.");
				  }
			  }
			});
		}

		// checks for broken urls and updates the console.
		function doneSearching( brokenurls ){
			// format console logs and print info about
			console.log("");
			if( !brokenUrls.length )
				console.log("No broken links found.");
			else {
				console.log("Some broken links were found.");
				for( var i = 0; i < brokenurls.length; i++ ){
					console.log("");
					console.log("Broken link: " + brokenurls[i][1]);
					if( brokenurls[i][0] )
						console.log("Inner content: " + brokenurls[i][0]);
					else
						console.log("Broken link may be an image.");				
				}
			}
		}
	}
}