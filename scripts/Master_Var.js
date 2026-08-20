// [[Variables]]
// (Audio)
var audio_flg;

// (Main Card)
var M_C = document.getElementById("card_display"); //Big Card Display (source)
var Display; //Big Card Display Value

// (Card Information)
var charName_Input = document.getElementById("CD_N"); //Where the Selected Creature's name gets displayed
var charName; //Name of Selected Creature
var charCredit_Input = document.getElementById("CD_C"); //Where the Selected Creature's credits gets displayed
var charCredit; //Creators of Selected Creature
var charIcon = document.getElementById("icon_disp"); //Icon to show in description box

// (Pages)
var C_Page = document.getElementById("c_page"); //The page number the user sees
var C_Page_V; //adjustable page value
var Page_Desc = document.getElementById("sp_info"); // Creature Name + Description

//(Card Selectors)
var S_C; //select indicator
var S_Ca = document.getElementsByClassName("sp_card_select_img"); //Array of icon images that can be updated
var S_C_BG = document.getElementsByClassName("sp_card_select_bg"); // Card Select Backgrounds that can be updated
var KTR = document.getElementById("KillThisRow"); //Hide this row for a special page
var Exp = document.getElementById("grid_container"); //make this big on page 6 or similar

// (Card Source Assemblers for Main and Selection Cards)
var C_Cat; //Card Category filepath for selection [delete for future version]
var C_N; //Card Name - Image Acronym [delete for future version]
var C_I; //Card Identity - Image Numeral. 
var x; //Card Array variable

// (Tabs)
var T_Ce = document.getElementById("tab_cel"); // cell tab source
var T_Cr = document.getElementById("tab_cre"); // creature tab source
var T_Ho = document.getElementById("tab_hou"); // house tab source
var T_Sp = document.getElementById("tab_spa"); // space tab source
var Jiggle; //Cards do a dance when tabs get pressed;

// (Responsive Design)
var ScreenW_Desktop = 1920;
var ScreenW_Mobile = 834;
var ScreenW_Mobile_S = 415;
var ScreenW_Mobile_xS = 395;
var T_pad; //padding config for normal tabs
var T_C_pad; //padding config for selected tabs
var E_pad; //padding config for 3x3 grid container;
var E_r_pad; //padding config for a reduced grid container;
var P_D_hi; //page description height
var P_D_hi_a; //page description hidden height
var C_Page_M = document.getElementById("c_page_m"); //mobile page thing, it's cosmetic!