// Match height function takes in an array of selectors
// and sets all elements that match individually to the same height

/*  an example of calling this function that will size all elements with class 'class' to the same height,
    as well as size all elements with class 'class2' to the same height */
var selectors = [".class", ".class2"];
matchHeight(selectors);

/* takes in an array of selectors and matches their heights */
function matchHeight(selArr) {
    setTimeout(function(){
      matchHeightHelper(selArr);
    }, 100);
    // call match height again if window resizes
    jQuery(window).resize(function(){
      matchHeightHelper(selArr);
    });
}

/* this function actually matches the heights of the selectors */
function matchHeightHelper(selArr) {
  for(var j = 0; j < selArr.length; j++) {
    var sel = selArr[j];
    // make sure there are elements on the page that match the selector
    if( jQuery(sel).length ) {
      // clear old minheight for accurate measurement
      jQuery(sel).css('min-height', '0');
      // send the elements to an array
      var elements = jQuery(sel).toArray();
      // set max height to first element in array
      var max = jQuery(elements[0]).outerHeight();
      // loop through array and save the tallest element
      for(var i = 1; i < elements.length; i++) {
        // grab height of current element
        var newHeight = jQuery(elements[i]).outerHeight();
        // compare and save
        if(max < newHeight) {
          max = newHeight;
        }
      } // end for
      // round up 1px for cleanliness
      max = Math.floor(max) + 1;
      // set all to min-height of max-height
      for(var i = 0; i < elements.length; i++) {
        jQuery(elements[i]).css("min-height", max + "px");
      } // end for
    }// end if sel.length
  }
}