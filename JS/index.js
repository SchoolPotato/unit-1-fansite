function darkModeSwitch(){
    //finding all elements that need to be switched to darkmode or lightmode
    var bodyElement = document.getElementsByTagName("body");
    var paragraphElements = document.getElementsByTagName("p");
    var footerElement = document.getElementsByClassName("footer");
    var darkFooterElement = document.getElementsByClassName("footer-darkmode");
    var toptextElement = document.getElementsByClassName("toptext");
    var darkToptextElement = document.getElementsByClassName("toptext-darkmode");
    var linkElements = document.getElementsByTagName("a");
    var navbarElement = document.getElementsByClassName("navbar");
    var darkNavbarElement = document.getElementsByClassName("navbar-darkmode");
    var topbarElement = document.getElementsByTagName("img");
    var menuElement = document.getElementsByClassName("menu");
    var darkMenuElement = document.getElementsByClassName("menu-darkmode");
    var buttonElement = document.getElementsByTagName("button");
    
    //changing elements to darkmode elements
    if (bodyElement[0].className == "main"){
        bodyElement[0].className = "main-darkmode";
        paragraphElements[0].id = "paragraph0-darkmode";
        paragraphElements[1].id = "paragraph1-darkmode";
        paragraphElements[2].id = "paragraph2-darkmode";
        footerElement[0].className = "footer-darkmode";
        toptextElement[0].className = "toptext-darkmode";
        navbarElement[0].className = "navbar-darkmode";
        linkElements[0].id = "navbar-darkmode";
        linkElements[1].id = "navbar-darkmode";
        linkElements[2].id = "menu-darkmode";
        linkElements[3].id = "menu-darkmode";
        topbarElement[0].src = "Images/header-background-darkmode.png";
        menuElement[0].className = "menu-darkmode";
        buttonElement[0].id = "button-darkmode";
    }

    //changing elements back to lightmode
    else {
        bodyElement[0].className = "main";
        paragraphElements[0].id = "paragraph0";
        paragraphElements[1].id = "paragraph1";
        paragraphElements[2].id = "paragraph2";
        darkFooterElement[0].className = "footer";
        darkToptextElement[0].className = "toptext";
        darkNavbarElement[0].className = "navbar";
        linkElements[0].id = "navbar";
        linkElements[1].id = "navbar";
        linkElements[2].id = "menu";
        linkElements[3].id = "menu";
        topbarElement[0].src = "Images/header-background.png";
        darkMenuElement[0].className = "menu";
        buttonElement[0].id = "button";
    }
}

function toggleMenu() {
    var x = document.getElementsByClassName("menu");
    var y = document.getElementsByClassName("dark-menu");
    if (x.style.display == "none" || y.style.display == "none") {
      x[0].style.display = "block";
      y[0].style.display = "block";
    } else {
      x[0].style.display = "none";
      y[0].style.display = "none";
    }
  }