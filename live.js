/*=========================================
CWM LIVE TV YOUTUBE EMBED
=========================================*/


const youtubeLive = {

    videoID : "rQJoEpzKkNk",

    autoplay : true,

    mute : true

};



function loadCWMLive(){


const player =
document.getElementById("cwmLive");


if(!player) return;



let url = 
`https://www.youtube.com/embed/${youtubeLive.videoID}
?autoplay=${youtubeLive.autoplay ? 1 : 0}
&mute=${youtubeLive.mute ? 1 : 0}
&rel=0
&modestbranding=1`;



player.src = url;



}



loadCWMLive();