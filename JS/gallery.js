function darkModeSwitch(){
    //finding all elements that need to be switched to darkmode or lightmode
    var bodyElement = document.getElementsByClassName("main-container");
    var darkBodyElement = document.getElementsByClassName("main-container-darkmode");
    var topbarElement = document.getElementsByTagName("img");
    var linkElements = document.getElementsByTagName("a");
    var navbarElement = document.getElementsByClassName("navbar");
    var darkNavbarElement = document.getElementsByClassName("navbar-darkmode");

    //changing elements to darkmode elements
    if (linkElements[0].id == "navbar"){
        bodyElement[0].className = "main-container-darkmode";
        topbarElement[0].src = "Images/header-background-darkmode.png";
        navbarElement[0].className = "navbar-darkmode";
        linkElements[0].id = "navbar-darkmode";
        linkElements[1].id = "navbar-darkmode";
    }

    //changing elements back to lightmode
    else {
        darkBodyElement[0].className = "main-container";
        topbarElement[0].src = "Images/header-background.png";
        darkNavbarElement[0].className = "navbar";
        linkElements[0].id = "navbar";
        linkElements[1].id = "navbar";
    }
}

//quiz function
function triviaQuiz(){
    var score = 0;
    var output = "";

    //prompts user with questions
    var firstAnswer = prompt("What color is Calvin's shirt?");
    var secondAnswer = prompt("What noise does Scientific Progress make?");
    var thirdAnswer = prompt("What is Calvin's dad's job?");
    var fourthAnswer = prompt("What cold place did Calvin and Hobbes decide to go to?");
    var fifthAnswer = prompt("What is the name of Calvin's space-faring alter-ego?");
    var sixthAnswer = prompt("What is the name of Calvin's superhero alter-ego?");

    //track correct answers
    if(firstAnswer == "Red" || firstAnswer == "red"){
      score ++;
    }
    if(secondAnswer == "Boink" || secondAnswer == "boink"){
        score ++;
    }
    if(thirdAnswer == "Patent Attorney" || thirdAnswer == "patent attorney" || thirdAnswer == "Patent attorney" || thirdAnswer == "patent Attorney"){
        score ++;
    }
    if(fourthAnswer == "Yukon" || fourthAnswer == "yukon"){
        score ++;
    }
    if(fifthAnswer == "Spaceman Spiff" || fifthAnswer == "spaceman spiff" || fifthAnswer == "spaceman Spiff" || fifthAnswer == "Spaceman spiff"){
        score ++;
    }
    if(sixthAnswer == "Stupendous Man" || sixthAnswer == "stupendous man" || sixthAnswer == "Stupendous man" || sixthAnswer == "Stupendous Man"){
        score ++;
    }
    
    //change output message based on score
    if(score == 0){
      output = score + "/6. ...Yikes. Try again...";
    }
    if(score > 0 && score < 2){
        output = score + "/6. ...I guess it's not nothing.";
    }
    if(score > 2 && score < 5){
        output = score + "/6. Almost.";
    }
    if(score > 5 && score < 6){
        output = score + "/6. Pretty good!";
    }
    if(score == 6){
        output = score + "/6! Perfect!";
    }

    //display score and output message to user
    alert(output);
}