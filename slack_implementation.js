	// ==UserScript==
// @name         Slack Hacks
// @namespace    http://michaeljscott.net/
// @version      0.1
// @description  Type these into the chat box in slack for special commands.
// @author       Michael Scott
// @match        https://*.slack.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // global vars
	var annoyingFlag = false;
	// index for images in arrays
	var index = Math.floor(Math.random()*10);

	// function to read input and listen for special char `
	function readInput(){
		jQuery("#msg_input").on("DOMSubtreeModified", function(e) {
			if( jQuery("#msg_input").html().includes("`") ) {
				setTimeout(parseFunctionCall,100);
			}
		});
	}

	// parse the input after special char
	function parseFunctionCall() {
		// get the input
		var input = jQuery("#msg_input p").html();
		// trim special char
		input = input.substring(0, input.length-1);
		// command switch
		switch ( input.toLowerCase() ) {
			// annoying text needs flag for toggle.
			case "annoy":
				if(annoyingFlag){
					// to turn off annoying text, reset keypress listener
					jQuery("#msg_input").off("DOMSubtreeModified");
					readInput();
					// flip flag
					annoyingFlag = !annoyingFlag;
					// clear input to show it worked
					jQuery("#msg_input p").html("");
				}
				else {
					jQuery("#msg_input p").keypress(function(a){jQuery("#msg_input p").html(annoyingCase(jQuery("#msg_input p").html()));});
					// flip flag
					annoyingFlag = !annoyingFlag;
					// clear input to show it worked
					jQuery("#msg_input p").html("");
				}
				break;
			case "read":
				jQuery("#msg_input p").html("`Read "+curTime()+"`");
				break;
			// hot keys for images/gifs I like
			case "disspace":
				jQuery("#msg_input p").html("http://i0.kym-cdn.com/photos/images/original/000/034/541/1263011890373.jpg");
				break;
			case "tarn":
				jQuery("#msg_input p").html("http://i2.kym-cdn.com/photos/images/original/001/211/814/a1c.jpg");
				break;
			case "trekt":
				jQuery("#msg_input p").html("http://giphy.com/gifs/rekt-tyrannosaurus-eLsawdQcvw3Be");
				break;
			case "o.o":
				jQuery("#msg_input p").html("ಠ_ಠ");
				break;
			// cycle through images in arrays
			case "disapprove":
				lookOfDisapproval(index++);
				break;
			case "fine":
				itsFine(index++);
				break;
			case "rekt":
				rekt(index++);
				break;
			case "supahot":
				supahot(index++);
				break;
			case "vietnam":
				vietnam(index++);
				break;
			case "help":
				printCommands();
				break;
			// default just replace trimmed input to show it was processed but wasn't recognized command
			default:
				if( input.indexOf("[") < input.indexOf(":") && input.indexOf(":") < input.indexOf("]") ) {
					stripTimeStamps( input );
				}
				jQuery("#msg_input p").val(input);
		}
	}

	// function to log all commands
	function printCommands() {
		var msg = "Available Commands:\n"+"annoy\n"+"read\n"+"disspace\n"+"tarn\n"+"trekt\n"+"o.o\n"+"disapprove\n"+"fine\n"+"supahot\n"+"vietnam\n"+"help\n"+"\nEnd all commands with ` and wait for change in text field.";
		jQuery("#msg_input p").attr("style", "overflow-y: scroll; height: 185px;");
		jQuery("#msg_input p").html(msg);
	}

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

	// picks a random image of disapproval from 10
	function lookOfDisapproval(index){
		var images = ["http://i0.kym-cdn.com/photos/images/original/000/034/541/1263011890373.jpg",
			"http://i.imgur.com/v59nc4n.jpg",
			"http://i1.kym-cdn.com/photos/images/original/000/190/417/1319427168001.jpg",
			"http://i2.kym-cdn.com/photos/images/facebook/000/056/238/brock20110724-22047-utv7m1.jpg",
			"https://derpicdn.net/img/2013/2/1/230425/thumb.png",
			"http://i0.kym-cdn.com/photos/images/facebook/000/646/645/b5e.jpg",
			"http://i2.kym-cdn.com/photos/images/original/000/155/390/1304845597044.jpg",
			"http://i2.kym-cdn.com/photos/images/original/000/004/593/shamwow-vince-shamwow.jpg",
			"http://i.imgur.com/0UiNzsD.jpg",
			"http://i1.kym-cdn.com/photos/images/original/000/287/039/b35.jpg"];
		jQuery("#msg_input p").html( images[index%images.length] );
	}

	function itsFine(index){
		var images = ["http://giphy.com/gifs/3o7WTwtEgkjYLzKgTe",
			"http://giphy.com/gifs/sinking-this-is-fine-everything-l0HlMG1EX2H38cZeE",
			"http://giphy.com/gifs/7Ejje0kJcpKsE",
			"http://giphy.com/gifs/face-everything-burgers-AbDP7WlMOeqDS",];
		jQuery("#msg_input p").html( images[index%images.length] );
	}

	// picks a random image of disapproval from 10
	function supahot(index){
		var images = ["https://media.giphy.com/media/CsjPp1CaMdUIw/giphy.gif",
			"https://media.giphy.com/media/qbAZ38vckAcik/giphy.gif",
			"https://media.giphy.com/media/1ofR3QioNy264/giphy.gif"];
		jQuery("#msg_input p").html( images[index%images.length] );
	}

	function rekt(index){
		var images = ["http://giphy.com/gifs/rekt-aoStfxnItobkI",
		"http://giphy.com/gifs/slap-dat-XMrHbDQGOovbW",
		"http://giphy.com/gifs/rekt-get-14vDr2sQgcTFKM",
		"http://giphy.com/gifs/rekt-11sbvNEwSomkzC",
		"http://giphy.com/gifs/slap-dat-XMrHbDQGOovbW",
		"http://giphy.com/gifs/TEcDhtKS2QPqE"];
		jQuery("#msg_input p").html( images[index%images.length] );
	}

	// picks a random image of disapproval from 10
	function vietnam(index){
		var images = ["http://giphy.com/gifs/dog-war-iCaTJzIdqMqre",
			"http://giphy.com/gifs/flashback-vietnam-6TwkTkCQJRO4o",
			"http://giphy.com/gifs/oscar-the-grouch-34V2n75CM4ojC"];
		jQuery("#msg_input p").html( images[index%images.length] );
	}

	function curTime() {
		var str = "";
		var d  = new Date();
		if( d.getHours() > 12 ) {
			str += d.getHours()-12 + ":";
			str += d.getMinutes() + " PM";
		}
		else {
			str += d.getHours() + ":";
			str += d.getMinutes() + " AM";
		}
		return str;
	}

	function stripTimeStamps( input ) {
		while( input.includes("[") && input.includes("]") ) {
			input = input.substring(0, input.indexOf("[")) + input.substring(input.indexOf("]") + 1);
		}
	}

	// call readinput to listen for special char
	readInput();
})();