// ((Card Selection Value Script))
function cardSelect(num) {
if (num == '1') {
S_C = 1;
charIcon.src = SC_01.src;
}
if (num == '2') {
S_C = 2;
charIcon.src = SC_02.src;
}
if (num == '3') {
S_C = 3;
charIcon.src = SC_03.src;
}
if (num == '4') {
S_C = 4;
charIcon.src = SC_04.src;
}
if (num == '5') {
S_C = 5;
charIcon.src = SC_05.src;
}
if (num == '6') {
S_C = 6;
charIcon.src = SC_06.src;
}
if (num == '7') {
S_C = 7;
charIcon.src = SC_07.src;
}
if (num == '8') {
S_C = 8;
charIcon.src = SC_08.src;
}
if (num == '9') {
S_C = 9;
charIcon.src = SC_09.src;
}
}

// (Main Card Display Update)
function displayUpdate(){ //Note 4 Future: C_Cat and C_N will no longer be needed in the next iteration, just focus on DISPLAY
if (C_Page_V == '1') {
if (S_C >= 5) { 
Display = (C_I + S_C - 4);
M_C.src = "img/card_main/" + C_Cat + "/" + C_N + "0" + Display + ".jpg";
} else {
Display = (C_I + S_C);
M_C.src = "img/card_main/cells/Ce_0" + Display + ".jpg";
}
}
if (C_Page_V == '2') {
if (S_C <= 4) {
Display = (5 + S_C);
M_C.src = "img/card_main/" + C_Cat + "/" + C_N + "0" + Display + ".jpg";
} else {
Display = (C_I + S_C - 5);
M_C.src = "img/card_main/" + C_Cat + "/" + C_N + Display + ".jpg";
}
}
if (C_Page_V == '3') {
Display = (C_I + S_C + 1);
M_C.src = "img/card_main/" + C_Cat + "/" + C_N + Display + ".jpg";
}
if (C_Page_V == '4') {
if (S_C <= 4) {
Display = (23 + S_C);
M_C.src = "img/card_main/creatures/C_" + Display + ".jpg";
} else {
Display = (C_I + S_C - 4);
M_C.src = "img/card_main/" + C_Cat + "/" + C_N + "0" + Display + ".jpg";
}
}
if (C_Page_V == '5') {
Display = (C_I + S_C);
M_C.src = "img/card_main/" + C_Cat + "/" + C_N + "0" + Display + ".jpg";
}
if (C_Page_V == '6') {
Display = (C_I + S_C);
M_C.src = "img/card_main/" + C_Cat + "/" + C_N + "0" + Display + ".jpg";
}
}

// ((Select Icon Updates))
function selectUpdate () {
if (C_Page_V == '1') { //Unique functions for the first page
C_I = 0;
C_Cat = "creatures";
C_N = "C_";
for (x = 0; x < S_Ca.length; x++){ //Sorting Algorithm for image files whose numerals start with "0x"
S_Ca[0].src = "img/card_select/cells/Ce_0" + (C_I + 1) + ".png";
S_Ca[1].src = "img/card_select/cells/Ce_0" + (C_I + 2) + ".png";
S_Ca[2].src = "img/card_select/cells/Ce_0" + (C_I + 3) + ".png";
S_Ca[3].src = "img/card_select/cells/Ce_0" + (C_I + 4) + ".png";
S_Ca[4].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 1) + ".png";
S_Ca[5].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 2) + ".png";
S_Ca[6].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 3) + ".png";
S_Ca[7].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 4) + ".png";
S_Ca[8].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 5) + ".png";
S_C_BG[0].style.backgroundImage = "url('img/card_select/BG_Ce.jpg')";
S_C_BG[1].style.backgroundImage = "url('img/card_select/BG_Ce.jpg')";
S_C_BG[2].style.backgroundImage = "url('img/card_select/BG_Ce.jpg')";
S_C_BG[3].style.backgroundImage = "url('img/card_select/BG_Ce.jpg')";
S_C_BG[4].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[5].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[6].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[7].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[8].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
}
}
if (C_Page_V == '2') { //Functions for page 2
C_I = ((C_Page_V - 1) * 9 + 1);
C_Cat = "creatures";
C_N = "C_";
for (x = 0; x < S_Ca.length; x++){
S_Ca[0].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I - 4) + ".png";
S_Ca[1].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I - 3) + ".png";
S_Ca[2].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I - 2) + ".png";
S_Ca[3].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I - 1) + ".png";
S_Ca[4].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I) + ".png";
S_Ca[5].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 1) + ".png";
S_Ca[6].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 2) + ".png";
S_Ca[7].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 3) + ".png";
S_Ca[8].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 4) + ".png";
S_C_BG[0].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[1].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[2].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[3].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[4].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[5].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[6].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[7].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[8].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
}
}
if (C_Page_V == '3') { //Functions for page 3
C_I = 13;
C_Cat = "creatures";
C_N = "C_";
for (x = 0; x < S_Ca.length; x++){
S_Ca[0].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 2) + ".png";
S_Ca[1].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 3) + ".png";
S_Ca[2].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 4) + ".png";
S_Ca[3].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 5) + ".png";
S_Ca[4].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 6) + ".png";
S_Ca[5].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 7) + ".png";
S_Ca[6].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 8) + ".png";
S_Ca[7].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 9) + ".png";
S_Ca[8].src = "img/card_select/" + C_Cat + "/" + C_N + (C_I + 10) + ".png";
S_C_BG[0].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[1].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[2].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[3].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[4].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[5].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[6].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[7].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[8].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
}
}
if (C_Page_V == '4') { //Functions for page 4
C_I = 0;
C_Cat = "buildings";
C_N = "H_";
for (x = 0; x < S_Ca.length; x++){
S_Ca[0].src = "img/card_select/creatures/C_" + (C_I + 24) + ".png";
S_Ca[1].src = "img/card_select/creatures/C_" + (C_I + 25) + ".png";
S_Ca[2].src = "img/card_select/creatures/C_" + (C_I + 26) + ".png";
S_Ca[3].src = "img/card_select/creatures/C_" + (C_I + 27) + ".png";
S_Ca[4].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 1) + ".png";
S_Ca[5].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 2) + ".png";
S_Ca[6].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 3) + ".png";
S_Ca[7].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 4) + ".png";
S_Ca[8].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 5) + ".png";
S_C_BG[0].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[1].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[2].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[3].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[4].style.backgroundImage = "url('img/card_select/BG_C.jpg')";
S_C_BG[5].style.backgroundImage = "url('img/card_select/BG_H.jpg')";
S_C_BG[6].style.backgroundImage = "url('img/card_select/BG_H.jpg')";
S_C_BG[7].style.backgroundImage = "url('img/card_select/BG_H.jpg')";
S_C_BG[8].style.backgroundImage = "url('img/card_select/BG_H.jpg')";
}
}
if (C_Page_V == '5') { //Functions for page 5
C_I = 0;
C_Cat = "space";
C_N = "S_";
for (x = 0; x < S_Ca.length; x++){
S_Ca[0].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 1) + ".png";
S_Ca[1].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 2) + ".png";
S_Ca[2].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 3) + ".png";
S_Ca[3].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 4) + ".png";
S_Ca[4].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 5) + ".png";
S_Ca[5].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 6) + ".png";
S_Ca[6].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 7) + ".png";
S_Ca[7].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 8) + ".png";
S_Ca[8].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 9) + ".png";
S_C_BG[0].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[1].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[2].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[3].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[4].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[5].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[6].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[7].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[8].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
}
}
if (C_Page_V == '6') { //Functions for page 6
C_I = 0;
C_Cat = "flowers";
C_N = "F_";
for (x = 0; x < S_Ca.length; x++){
S_Ca[0].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 1) + ".png";
S_Ca[1].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 2) + ".png";
S_Ca[2].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 3) + ".png";
S_Ca[3].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 4) + ".png";
S_Ca[4].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 5) + ".png";
S_Ca[5].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 6) + ".png";
S_Ca[6].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 7) + ".png";
S_Ca[7].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 8) + ".png";
S_Ca[8].src = "img/card_select/" + C_Cat + "/" + C_N + "0" + (C_I + 9) + ".png";
S_C_BG[0].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[1].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[2].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[3].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[4].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[5].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[6].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[7].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
S_C_BG[8].style.backgroundImage = "url('img/card_select/BG_S.jpg')";
}
}
}

function killThatRow() { //When reaching certain pages, KILL that bottom row
if (C_Page_V == '6') {
KTR.style.display = "none";
Exp.style.padding = E_r_pad;
} else {
KTR.style.display = "flex";
Exp.style.padding = E_pad;
}
}

function cardJiggle(num) { //Make cards dance when pressing tabs
if (num == '1') {
if (Jiggle == 0) {
Jiggle = 1;
S_C_BG[0].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
S_C_BG[1].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
S_C_BG[2].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
S_C_BG[3].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
setTimeout (cardJiggleStop, 800, 1);
}
}
if (num == '2') {
if (Jiggle == 0) {
Jiggle = 1;
S_C_BG[4].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
S_C_BG[5].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
S_C_BG[6].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
S_C_BG[7].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
S_C_BG[8].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
setTimeout (cardJiggleStop, 800, 2);
}
}
if (num == '3') {
if (Jiggle == 0) {
Jiggle = 1;
S_C_BG[4].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
S_C_BG[5].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
S_C_BG[6].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
S_C_BG[7].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
S_C_BG[8].style.animation='cardJiggle 1s ease 0s 1 normal forwards';
setTimeout (cardJiggleStop, 800, 2);
}
}
if (num == '4') {
}
}

function cardJiggleStop(num) {
if (num == '1'){
S_C_BG[0].style.animation='';
S_C_BG[1].style.animation='';
S_C_BG[2].style.animation='';
S_C_BG[3].style.animation='';
Jiggle = 0;
}
if (num == '2'){
S_C_BG[4].style.animation='';
S_C_BG[5].style.animation='';
S_C_BG[6].style.animation='';
S_C_BG[7].style.animation='';
S_C_BG[8].style.animation='';
Jiggle = 0;
}
if (num == '3'){
S_C_BG[4].style.animation='';
S_C_BG[5].style.animation='';
S_C_BG[6].style.animation='';
S_C_BG[7].style.animation='';
S_C_BG[8].style.animation='';
Jiggle = 0;
}
}