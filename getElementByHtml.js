function getElementByHtml( selector, innerHTML ){
	// get all links, then return the ones that have the innerHTML that matches passed str
	var matchingElements = [];
	var elements = $( selector );
	for( var i = 0; i < elements.length; i++ ){
		if( elements[i].innerHTML == innerHTML )
			matchingElements.push(elements[i]);
	}
	return matchingElements;
}