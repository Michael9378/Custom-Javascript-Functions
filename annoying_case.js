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

// actual function to capitalize a string
function capitalize(string) {
	// split the string on spaces
  var str = string.split(" ");
  // return string to hold new string
  var rtnstr = "";
  // loop through string
  for(var i = 0; i < str.length; i++) {
  	// replace first char in strings to capital and add space at end
    rtnstr += str[i].charAt(0).toUpperCase() + str[i].substring(1) + " ";
  }
  return rtnstr;
}