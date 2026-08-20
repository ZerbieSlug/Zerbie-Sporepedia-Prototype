// (On-load)
function bootup() {
audio_flg = 0;
S_C = 0;
C_Page_V = 1;
Display = 0;
M_C.src = "img/card_main/debug-slug.png";
C_Cat = 0;
C_N = 0;
C_I = 0;
C_Page.textContent = C_Page_V;
C_Page_M.textContent = C_Page_V;
Jiggle = 0;
}

//(Responsive Check - Check screen size before then changing certain style functions)
function screenCheck() {
if (window.innerWidth <= ScreenW_Mobile_xS) { //Screen less than/equal to 395px width
T_pad = "2rem 2rem";
T_C_pad = "2.5rem 2rem";
E_pad = "0rem";
E_r_pad = "2.06rem 0rem";
P_D_hi = "14.88rem";
P_D_hi_a = "0px";
}
if (window.innerWidth < ScreenW_Mobile_S && window.innerWidth > ScreenW_Mobile_xS) { //Screen more than 395px width but less than/equal to 415px width
T_pad = "2rem 2rem";
T_C_pad = "2.5rem 2rem";
E_pad = "0rem";
E_r_pad = "2.22rem 0rem";
P_D_hi = "16rem";
P_D_hi_a = "0px";
}
if (window.innerWidth > ScreenW_Mobile_S && window.innerWidth < ScreenW_Mobile) { //Screen more than/equal to 415px width but less than 834px
T_pad = "3rem 3rem";
T_C_pad = "3.5rem 3rem";
E_pad = "0.5rem";
E_r_pad = "1rem 2.22rem";
P_D_hi = "19rem";
P_D_hi_a = "0px";
}
if (window.innerWidth > ScreenW_Mobile && window.innerWidth < ScreenW_Desktop) { //Screen is more than to 834px width but less than desktop
T_pad = "3rem 3rem";
T_C_pad = "3.5rem 3rem";
E_pad = "0.5rem";
E_r_pad = "1rem 2.22rem";
P_D_hi = "25rem";
P_D_hi_a = "25rem";
}
if (window.innerWidth >= ScreenW_Desktop){ //Screen is bigger or equal to desktop width
T_pad = "2.5rem 2rem";
T_C_pad = "2.5rem 2.5rem";
E_pad = "1rem";
E_r_pad = "8.88rem 1rem";
P_D_hi = "19rem";
P_D_hi_a = "19rem";
}
Page_Desc.style.height = P_D_hi_a;
Exp.style.padding = E_pad;
}

// (Music Player Functions)
var db_audio_flg = document.getElementById("music-on");
  var audio = new Audio('bg-music.mp3');
function play() {
  if (audio_flg == 0) {
  audio.play();
  audio_flg = 1;
  db_audio_flg.textContent = audio_flg;
  }
}

function pause() {
if (audio_flg == 1) {
audio.pause();
audio.currentTime = 0;
audio_flg = 0;
db_audio_flg.textContent = audio_flg;
}
}