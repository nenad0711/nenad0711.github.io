//app menu
var showAppMenu = false;
var menuOpen = false;

var AppButon = document.getElementById("appatizers");

AppButon.onclick = function () {
    var appMenu = document.getElementById("appMenu");
        if(menuOpen == false || showAppMenu == true){
            if(showAppMenu == false){
            appMenu.style.display = "inline";
            showAppMenu = true;
            menuOpen = true;
        }else{
            appMenu.style.display = "none";    
            showAppMenu = false;
            menuOpen = false;
        }
    }
};


//brunch menu
var showBrunchMenu = false;

var BrunchButton = document.getElementById("brunch");

BrunchButton.onclick = function () {
    var brunchMenu = document.getElementById("brunchMenu");
        if(menuOpen == false || showBrunchMenu == true){
            if(showBrunchMenu == false){
            brunchMenu.style.display = "inline";
            showBrunchMenu = true;
            menuOpen = true;
        }else{
            brunchMenu.style.display = "none";    
            showBrunchMenu = false;
            menuOpen = false;
        }
    }
};


//lunch menu
var showLunchMenu = false;

var lunchButton = document.getElementById("lunch");

lunchButton.onclick = function () {
    var lunchMenu = document.getElementById("lunchMenu");
        if(menuOpen == false || showLunchMenu == true){
            if(showLunchMenu == false){
                lunchMenu.style.display = "inline";
                showLunchMenu = true;
                menuOpen = true;
            }else{
                lunchMenu.style.display = "none";    
                showLunchMenu = false;
                menuOpen = false;
            }
    }
};

//Dinner menu
var showDinnerMenu = false;

var dinnerButton = document.getElementById("dinner");

dinnerButton.onclick = function () {
    var dinnerMenu = document.getElementById("dinnerMenu");
        if(menuOpen == false || showDinnerMenu == true){
            if(showDinnerMenu == false){
                dinnerMenu.style.display = "inline";
                showDinnerMenu = true;
                menuOpen = true;
            }else{
                dinnerMenu.style.display = "none";    
                showDinnerMenu = false;
                menuOpen = false;
            }
    }
};
