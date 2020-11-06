function darkModeSwitch(){
    var bodyElement = document.getElementsByTagName(body);
    if (bodyElement.id == "main"){
        bodyElement.id = "main-darkmode";
    }
    else {
        bodyElement.id = "main";
    }
}