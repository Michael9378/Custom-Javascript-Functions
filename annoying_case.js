// function to make any string that annoying upper/lowercase type text
function annoyingCase(str) {
	// create new string to return
	var newStr = "";
	// loop through existing string
	for(var i = 0; i < str.length; i++) {
		// switch case every other string
		if ( i%2 ) {
			// start with lower case
			newStr += str.toLowerCase().charAt(i);			
		}
		else {
			// add upper case
			newStr += str.toUpperCase().charAt(i);
		}
	}
	return newStr;
}

// same function as above, but randomize case
function randomCase(str) {
	var newStr = "";
	for(var i = 0; i < str.length; i++) {
		// use random number between 0 and 1 to decide.
		// 50/50 chance for upper or lower case
		if( Math.random() > 0.5 ) {
			newStr += str.toLowerCase().charAt(i);
		}
		else{
			newStr += str.toUpperCase().charAt(i);
		}
	}
	return newStr;
}