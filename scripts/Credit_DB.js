// ((Description Update Script))
function descUpdate() {
if (window.innerWidth < ScreenW_Desktop){ //Use a different hiding method if PC or Mobile
Page_Desc.style.display = "flex";
Page_Desc.style.visibility = "visible";
Page_Desc.style.height = P_D_hi;
} else {
Page_Desc.style.visibility = "visible";
Page_Desc.style.height = P_D_hi_a;
Page_Desc.style.display = "flex";
}
// For Future Reference: only check for DISPLAY value, do not need to check on page and card location anymore
if (C_Page_V == '1') {
if (S_C <= 4) {
charName_Input.innerHTML = "Nameless Cell";
charCredit_Input.innerHTML = "Made by: Zerbie" + "<br>" + "Every Cell should have the same name and description!" ;
}
if (S_C == 5) {
charName_Input.innerHTML = "Zerbie";
charCredit_Input.innerHTML = "Made by: ???" + "<br>" + "Hello I'm Zerbie, and I forgot the rest of my creations!" ;
}
if (S_C >= 6) {
charName_Input.innerHTML = "Nameless Creature";
charCredit_Input.innerHTML = "Made by: zerbie" + "<br>" + "What was this one called again??" ;
}
}
if (C_Page_V == '2' || C_Page_V == '3' ) {
charName_Input.innerHTML = "Nameless Creature";
charCredit_Input.innerHTML = "Made by: zerbie" + "<br>" + "What was this one called again??" ;
}
if (C_Page_V == '4') {
if (S_C <= 4) {
charName_Input.innerHTML = "Nameless Creature";
charCredit_Input.innerHTML = "Made by: Zerbie" + "<br>" + "What was this one called again??" ;
}
if (S_C >= 5) {
charName_Input.innerHTML = "Nameless Building";
charCredit_Input.innerHTML = "Made by: zerbie" + "<br>" + "I'm not a freaking architect!" ;
}
}
if (C_Page_V == '5' ) {
charName_Input.innerHTML = "Planet";
charCredit_Input.innerHTML = "Made by: ???" + "<br>" + "I think my brother made some of these..." ;
}
if (C_Page_V == '6') {
if (S_C == 1) {
charName_Input.innerHTML = "Aqua";
charCredit_Input.innerHTML = "Made by: Asgore" + "<br>" + "Uuu, I think I understand mushrooms now!" ;
}
if (S_C == 2) {
charName_Input.innerHTML = "Seth";
charCredit_Input.innerHTML = "Made by: Asgore" + "<br>" + "I don't think you know what 'Spore' means..." ;
}
if (S_C == 3) {
charName_Input.innerHTML = "Green";
charCredit_Input.innerHTML = "Made by: Asgore" + "<br>" + "­Ъци" ;
}
if (S_C == 4) {
charName_Input.innerHTML = "Orange";
charCredit_Input.innerHTML = "Made by: Asgore | Sister of: Pink" + "<br>" + "CALL ME A RAT AGAIN, SAY IT AGAIN YOU COWARD!!!" ;
}
if (S_C == 5) {
charName_Input.innerHTML = "Yellow";
charCredit_Input.innerHTML = "Made by: Asgore" + "<br>" + "BLUE! I HAVEN'T CHANGED!" ;
}
if (S_C == 6) {
charName_Input.innerHTML = "Blue";
charCredit_Input.innerHTML = "Made by: Asgore" + "<br>" + "Strangely, in an graphical sense, I haven't changed either..." ;
}
}
}