
// functions to fire when a user loads and scrolls a page
// this will be used in a research project to see how often users scroll past the fold

$(document).ready(function(){
	// give onPageLoad a second to make sure they didnt just click and back out immediately
	setTimeout(onPageLoad, 1000);

	// get height of window, and when scrolled this far, fire onPageScroll
	var winHeight = $(window).height();
	var docHeight = $(window).height();
	var pageScrollFired = false;
	var pageBottomFired = false;

	$(window).scroll(function(){
		var scrollDist = $(window).scrollTop();
		if( scrollDist > winHeight && !pageScrollFired ) {
			pageScrollFired = true;
			onPageScroll();
		}
		if( scrollDist > docHeight && !pageBottomFired ) {
			pageBottomFired = true;
			onBottomPage();
		}
	});
});

// fires when the page has been loaded
function onPageLoad() {
	// although jQuery already has an on page load, 
	// this function was added for sake of organization.
	var trigger = "load";
}

// fires after the users scrolls down 1 full page
function onPageScroll() {
	var trigger = "scroll";
}

// fires after the user scrolls to the bottom of the page
function onBottomPage() {
	var trigger = "bottom";
}

// TODO: Make call to track scrolls

function logData(trigger) {
	// ajax call to database to store interactions
}