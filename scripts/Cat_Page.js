// ((Page Scripts)
// (Page Previous <--)
function pageLeft() {
if (window.innerWidth < ScreenW_Mobile){ //On mobile devices, completely hide the desc box
Page_Desc.style.height = P_D_hi_a; //NOTE TO SELF: Relocate some of these responsive-related matters to separate functions in the future
Page_Desc.style.display = "none";
} else {
Page_Desc.style.height = P_D_hi_a;
Page_Desc.style.display = "flex";
Page_Desc.style.visibility = "hidden";
}
C_Page_V = C_Page_V - 1;
M_C.src = "img/card_main/debug-slug.png";
S_C = 0;
if (C_Page_V == 0) {
C_Page_V = 6
}
C_Page.textContent = C_Page_V;
C_Page_M.textContent = C_Page_V;
}

// (Page Next -->)
function pageRight() {
if (window.innerWidth < ScreenW_Mobile){ //On mobile devices, completely hide the desc box
Page_Desc.style.height = P_D_hi_a;
Page_Desc.style.display = "none";
} else {
Page_Desc.style.height = P_D_hi_a;
Page_Desc.style.display = "flex";
Page_Desc.style.visibility = "hidden";
}
C_Page_V = C_Page_V + 1;
M_C.src = "img/card_main/debug-slug.png";
S_C = 0;
if (C_Page_V == 7) { //Cells only have 1 page of content
C_Page_V = 1;
}
C_Page.textContent = C_Page_V;
C_Page_M.textContent = C_Page_V;
}

// ((Tab-Icon script))
function tabSkip(num) { //By default on load, name + description will be hidden
C_Page_V = 1;
C_Page.textContent = C_Page_V;
C_Page_M.textContent = C_Page_V;
M_C.src = "img/card_main/debug-slug.png";
charCredit_Input.textContent = "";
if (num == '1') { //Cell Icon Anim + Page Reset + Tab State 
C_Page_V = 1; // Skip to page where Cells first appear
C_Page.textContent = C_Page_V;
C_Page_M.textContent = C_Page_V;
M_C.src = "img/card_main/debug-slug.png"; // Reset Big Card Preview
T_Ce.style.backgroundImage = "url('img/tab_icons/tab_c_01.png')"; // Cell is on, everything Off
T_Ce.style.padding = T_C_pad;
T_Ce.style.backgroundColor = "#110F21";
T_Cr.style.backgroundImage = "url('img/tab_icons/tab_cr_00.png')";
T_Cr.style.padding = T_pad;
T_Cr.style.backgroundColor = "#47586C";
T_Ho.style.backgroundImage = "url('img/tab_icons/tab_h_00.png')";
T_Ho.style.padding = T_pad;
T_Ho.style.backgroundColor = "#47586C";
T_Sp.style.backgroundImage = "url('img/tab_icons/tab_s_00.png')";
T_Sp.style.padding = T_pad;
T_Sp.style.backgroundColor = "#47586C";
KTR.style.display = "flex";
Page_Desc.style.visibility = "hidden";
Page_Desc.style.height = P_D_hi_a;
Exp.style.padding = E_pad;
}
if (num == '2') { //Creature Icon Anim + Page Reset + Tab State 
C_Page_V = 1; // Reset Current Page Value
C_Page.textContent = C_Page_V;
C_Page_M.textContent = C_Page_V;
M_C.src = "img/card_main/debug-slug.png"; // Reset Big Card Preview
T_Cr.style.backgroundImage = "url('img/tab_icons/tab_cr_01.png')"; // Creature is on, everything Off
T_Cr.style.padding = T_C_pad;
T_Cr.style.backgroundColor = "#110F21";
T_Ho.style.backgroundImage = "url('img/tab_icons/tab_h_00.png')";
T_Ho.style.padding = T_pad;
T_Ho.style.backgroundColor = "#47586C";
T_Sp.style.backgroundImage = "url('img/tab_icons/tab_s_00.png')";
T_Sp.style.padding = T_pad;
T_Sp.style.backgroundColor = "#47586C";
T_Ce.style.backgroundImage = "url('img/tab_icons/tab_c_00.png')";
T_Ce.style.padding = T_pad;
T_Ce.style.backgroundColor = "#47586C";
KTR.style.display = "flex";
if (window.innerWidth < ScreenW_Mobile){
Page_Desc.style.display = "none";
} else {
Page_Desc.style.visibility = "hidden";
Page_Desc.style.height = P_D_hi_a;
}
Exp.style.padding = E_pad;
}
if (num == '3') { //Building Icon Anim + Page Reset + Tab State 
C_Page_V = 4; // Reset Current Page Value
C_Page.textContent = C_Page_V;
C_Page_M.textContent = C_Page_V;
M_C.src = "img/card_main/debug-slug.png"; // Reset Big Card Preview
T_Ho.style.backgroundImage = "url('img/tab_icons/tab_h_01.png')"; // House is on, everything Off
T_Ho.style.padding = T_C_pad;
T_Ho.style.backgroundColor = "#110F21";
T_Ce.style.backgroundImage = "url('img/tab_icons/tab_c_00.png')";
T_Ce.style.padding = T_pad;
T_Ce.style.backgroundColor = "#47586C";
T_Cr.style.backgroundImage = "url('img/tab_icons/tab_cr_00.png')";
T_Cr.style.padding = T_pad;
T_Cr.style.backgroundColor = "#47586C";
T_Sp.style.backgroundImage = "url('img/tab_icons/tab_s_00.png')";
T_Sp.style.padding = T_pad;
T_Sp.style.backgroundColor = "#47586C";
KTR.style.display = "flex";
if (window.innerWidth < ScreenW_Mobile){
Page_Desc.style.display = "none";
} else {
Page_Desc.style.visibility = "hidden";
Page_Desc.style.height = P_D_hi_a;
}
Exp.style.padding = E_pad;
}
if (num == '4') { //Space Icon Anim + Page Reset + Tab State 
C_Page_V = 5; // Reset Current Page Value
C_Page.textContent = C_Page_V; // Blank Description
C_Page_M.textContent = C_Page_V;
M_C.src = "img/card_main/debug-slug.png"; // Reset Big Card Preview
T_Sp.style.backgroundImage = "url('img/tab_icons/tab_s_01.png')"; // Space is on, everything Off
T_Sp.style.padding = T_C_pad;
T_Sp.style.backgroundColor = "#110F21";
T_Cr.style.backgroundImage = "url('img/tab_icons/tab_cr_00.png')";
T_Cr.style.padding = T_pad;
T_Cr.style.backgroundColor = "#47586C";
T_Ce.style.backgroundImage = "url('img/tab_icons/tab_c_00.png')";
T_Ce.style.padding = T_pad;
T_Ce.style.backgroundColor = "#47586C";
T_Ho.style.backgroundImage = "url('img/tab_icons/tab_h_00.png')";
T_Ho.style.padding = T_pad;
T_Ho.style.backgroundColor = "#47586C";
KTR.style.display = "flex";
if (window.innerWidth < ScreenW_Mobile){
Page_Desc.style.display = "none";
} else {
Page_Desc.style.visibility = "hidden";
Page_Desc.style.height = P_D_hi_a;
}
Exp.style.padding = E_pad;
}
}
