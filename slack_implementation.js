// global vars
var annoyingFlag = false;
// index for images in arrays
var index = Math.floor(Math.random()*10);

// function to read input and listen for special char `
function readInput(){
	$("#msg_input").keypress(function(e) {
		if(e.keyCode == 96) {
			setTimeout(function(){parseFunctionCall();},100);
		}
	});
}

// parse the input after special char
function parseFunctionCall() {
	// get the input
	var input = $("#msg_input").val();
	// trim special char
	input = input.substring(0, input.length-1);
	// command switch
	switch ( input.toLowerCase() ) {
		// annoying text needs flag for toggle.
		case "annoy":
			if(annoyingFlag){
				// to turn off annoying text, reset keypress listener
				$("#msg_input").off("keypress");
				readInput();
				// flip flag
				annoyingFlag = !annoyingFlag;
				// clear input to show it worked
				$("#msg_input").val("");
			}
			else {
				$("#msg_input").keypress(function(a){$("#msg_input").val(annoyingCase($("#msg_input").val()))});
				// flip flag
				annoyingFlag = !annoyingFlag;
				// clear input to show it worked
				$("#msg_input").val("");
			}
			break;
		case "read":
			$("#msg_input").val("`Read "+curTime()+"`");
			break;
		// hot keys for images/gifs I like
		case "disspace":
			$("#msg_input").val("http://i0.kym-cdn.com/photos/images/original/000/034/541/1263011890373.jpg");
			break;
		case "tarn":
			$("#msg_input").val("http://i2.kym-cdn.com/photos/images/original/001/211/814/a1c.jpg");
			break;
		case "trekt":
			$("#msg_input").val("http://giphy.com/gifs/rekt-tyrannosaurus-eLsawdQcvw3Be");
			break;
		case "o.o":
			$("#msg_input").val("ಠ_ಠ");
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
			$("#msg_input").val(input);
	}
}

// function to log all commands
function printCommands() {
	var msg = "Available Commands:\n"+"annoy\n"+"read\n"+"disspace\n"+"tarn\n"+"trekt\n"+"o.o\n"+"disapprove\n"+"fine\n"+"supahot\n"+"vietnam\n"+"help\n"+"\nEnd all commands with ` and wait for change in text field.";
	$("#msg_input").attr("style", "overflow-y: scroll; height: 185px;");
	$("#msg_input").val(msg);
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
	$("#msg_input").val( images[index%images.length] );
}

function itsFine(index){
	var images = ["http://giphy.com/gifs/3o7WTwtEgkjYLzKgTe",
		"http://giphy.com/gifs/sinking-this-is-fine-everything-l0HlMG1EX2H38cZeE",
		"http://giphy.com/gifs/7Ejje0kJcpKsE",
		"http://giphy.com/gifs/face-everything-burgers-AbDP7WlMOeqDS",];
	$("#msg_input").val( images[index%images.length] );
}

// picks a random image of disapproval from 10
function supahot(index){
	var images = ["https://media.giphy.com/media/CsjPp1CaMdUIw/giphy.gif",
		"https://media.giphy.com/media/qbAZ38vckAcik/giphy.gif",
		"https://media.giphy.com/media/1ofR3QioNy264/giphy.gif"];
	$("#msg_input").val( images[index%images.length] );
}

function rekt(index){
	var images = ["http://giphy.com/gifs/rekt-aoStfxnItobkI",
	"http://giphy.com/gifs/slap-dat-XMrHbDQGOovbW",
	"http://giphy.com/gifs/rekt-get-14vDr2sQgcTFKM",
	"http://giphy.com/gifs/rekt-11sbvNEwSomkzC",
	"http://giphy.com/gifs/slap-dat-XMrHbDQGOovbW",
	"http://giphy.com/gifs/TEcDhtKS2QPqE"];
	$("#msg_input").val( images[index%images.length] );
}

// picks a random image of disapproval from 10
function vietnam(index){
	var images = ["http://giphy.com/gifs/dog-war-iCaTJzIdqMqre",
		"http://giphy.com/gifs/flashback-vietnam-6TwkTkCQJRO4o",
		"http://giphy.com/gifs/oscar-the-grouch-34V2n75CM4ojC"];
	$("#msg_input").val( images[index%images.length] );
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

// call readinput to listen for special char
readInput();