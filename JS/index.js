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
    var mainContainer = document.getElementsByTagName("div");
    
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
        topbarElement[0].src = "Images/header-background-darkmode.png";
        mainContainer[3].id = "main-container1-darkmode";
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
        topbarElement[0].src = "Images/header-background.png";
        mainContainer[3].id = "main-container1";
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