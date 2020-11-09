function darkModeSwitch(){
    //finding all elements that need to be switched to darkmode or lightmode
    var bodyElement = document.getElementsByTagName("body");
    var paragraphElements = document.getElementsByTagName("p");
    var footerElement = document.getElementsByClassName("footer");
    var darkFooterElement = document.getElementsByClassName("footer-darkmode");
    var toptextElement = document.getElementsByClassName("toptext");
    var darkToptextElement = document.getElementsByClassName("toptext-darkmode");
    /*var navbarContainerElement = document.getElementsByClassName("navbar");
    var darkNavbarContainerElement = document.getElementsByClassName("navbar-darkmode");
    var navbarElement = document.getElementsById("navbar");
    var darkNavbarElement = document.getElementsByID("navbar-darkmode");*/

    //changing elements to darkmode elements
    if (bodyElement[0].className == "main"){
        bodyElement[0].className = "main-darkmode";
        paragraphElements[0].id = "paragraph0-darkmode";
        paragraphElements[1].id = "paragraph1-darkmode";
        paragraphElements[2].id = "paragraph2-darkmode";
        footerElement[0].className = "footer-darkmode";
        toptextElement[0].className = "toptext-darkmode";
        navbarContainerElement[0].className = "navbar-darkmode";
        navbarElement[0].id = "navbar-darkmode";
        navbarElement[1].id = "navbar-darkmode";
    }

    //changing elements back to lightmode
    else {
        bodyElement[0].className = "main";
        paragraphElements[0].id = "paragraph0";
        paragraphElements[1].id = "paragraph1";
        paragraphElements[2].id = "paragraph2";
        darkFooterElement[0].className = "footer";
        darkToptextElement[0].className = "toptext";
        darkNavbarContainerElement[0].className = "navbar";
        darkNavbarElement[0].id = "navbar";
        darkNavbarElement[1].id = "navbar";
    }
}