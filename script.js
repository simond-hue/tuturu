document.getElementById("main").addEventListener("mousedown", function(event) { if(event.button !== 0) return; else { mouseDownNormal(); } });
document.getElementById("main").addEventListener("mouseup", function(event) { if(event.button !== 0) return; else { mouseUpNormal(); }});
document.getElementById("main").addEventListener("touchstart", function(event) { mouseDownNormal(); event.preventDefault(); });
document.getElementById("main").addEventListener("touchend", mouseUpNormal);
document.getElementById("main").addEventListener("touchcancel", mouseUpNormal);
document.getElementById("main").addEventListener("touchmove", function(event) { event.preventDefault(); });


var audio = new Audio();
audio.src = "public/audio/tuturu.mp3";

var bg_music = new Audio();
bg_music.src = "public/audio/bg_music.mp3";
bg_music.volume = 0.4;
bg_music.loop = true;

var clicks = true;

function mouseDownNormal() {
	document.getElementById("normal_pic").style.display = "none";
	document.getElementById("clicked_pic").style.display = "block";
	audio.play();
	if(clicks){
		bg_music.play();
		clicks = false;
	}
	clicks++;
}

function mouseUpNormal() {
	document.getElementById("normal_pic").style.display = "block";
	document.getElementById("clicked_pic").style.display = "none";
}
