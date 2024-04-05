console.log("Yo, I am alive!");

// Get centerDiv
var centerDiv = document.getElementById("centerDiv");

// Create the Raphael paper for drawing and creating graphical objects
var paper = new Raphael(centerDiv);

// Create variables for the width and heigth of the canvas in 4:5 (width:height) ratio; maximised
if ((paper.height / 5) * 4 > paper.width) {
  //if pWidth restricts the ratio
  var pWidth = paper.width;
  var pHeight = (paper.width / 4) * 5; //set pHeight according to paper width
} else {
  // if pHeight restricts the ratio
  var pWidth = (paper.height / 5) * 4; //set pWidth according to pHeight
  var pHeight = paper.height;
}

console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);

//==================================================================================
//===================================== AUDIOS =====================================

//load audios
var bgAudio = new Audio("resources/bgAudio.wav");
var hscoreAudio = new Audio("resources/hscoreAudio.wav");
var loseAudio = new Audio("resources/losingAudio.wav");

var soundMute = document.getElementById("soundBox"); //get mute checkbox
var muted = "no"; //create variable for state of checkbox; initialised to "no"

//add event listener to mute check box
soundBox.addEventListener("click", function () {
  if (muted === "no") {
    bgAudio.muted = true;
    hscoreAudio.muted = true;
    loseAudio.muted = true;
    soundVolume.value = 0; //change the audio volume bar to 0 to correspond with muted state
    muted = "yes"; //change state to "yes" for muted
  } else {
    muted = "no"; //change state to "no"
    bgAudio.muted = false; //switch on audio for bg, hscore and losing
    hscoreAudio.muted = false;
    loseAudio.muted = false;

    soundVolume.value = 0.3; // change the audio volume bar to 0.3 to correspond with unmuted audio
    bgAudio.volume = soundVolume.value; //set audio volume accordingly
    hscoreAudio.volume = soundVolume.value;
    loseAudio.volume = soundVolume.value;
  }
});

var soundVolume = document.getElementById("soundVol"); //get audio volume range

//add event listener to audio volume range
soundVolume.addEventListener("change", function (ev) {
  console.log(soundVolume.value);
  bgAudio.volume = soundVolume.value;
  hscoreAudio.volume = soundVolume.value;
  loseAudio.volume = soundVolume.value;
});

//==================================================================================
//=============================== START GAME function ==============================
var score;
var mainLoopInterval; //create as global variable to be able to clearInterval during pause/endgame
var waterInterval; //^

var startGame = function () {
  paper.clear(); //clears paper before setting up for gameplay

  bgAudio.play(); // play bg audio, set loop, set volume to 0.5
  bgAudio.loop = true;
  bgAudio.volume = soundVolume.value;

  // Create black background
  var bgRect = paper.rect(0, 0, pWidth, pHeight);
  bgRect.attr({ fill: "black" });

  //reset variables to initialised values
  platWidth = 90;
  score = 0;
  document.getElementById("score").innerHTML = score; // reset score shown on sidebar to 0

  //create player ball, platforms, and water level
  createBall();
  createStartPlat();
  createPlatforms(platNum);
  createWater();

  //call mainLoop in setInterval to sense for keypresses + gravity
  mainLoopInterval = setInterval(mainLoop, 10);

  showPauseButton();
  highScoreState = " "; //reset highScoreState every game to allow breaking new highscore text and audio to happen
};

//==================================================================================
//================================== START button ==================================

//Creating outside of startGame() so that it will be drawn when the player opens the tab
var startScreen = paper.rect(0, 0, pWidth, pHeight).attr({ fill: "black" });
var buttonWidth = 150;
var buttonHeight = 50;

var startButton = paper.rect(
  pWidth / 2 - buttonWidth / 2,
  pHeight / 2 - buttonHeight / 2,
  buttonWidth,
  buttonHeight
);
startButton.attr({ fill: "grey" });
var startText = paper
  .text(pWidth / 2, pHeight / 2, "START")
  .attr({ "font-family": "Trebuchet MS", "font-size": 20 });

var welcomeText = paper
  .text(pWidth / 2, pHeight / 3, "Bouncy Escape")
  .attr({ "font-family": "Trebuchet MS", "font-size": 20, fill: "white" });
var controlText1 = paper
  .text(pWidth / 2, (pHeight / 4) * 3 - 30, "Controls:")
  .attr({
    "font-family": "Trebuchet MS",
    "font-size": 16,
    fill: "white",
    opacity: 0.6,
  });
var controlText2 = paper
  .text(pWidth / 2, (pHeight / 4) * 3, "Left/Right Arrow Keys to move sideways")
  .attr({
    "font-family": "Trebuchet MS",
    "font-size": 12,
    fill: "white",
    opacity: 0.6,
  });
var controlText3 = paper
  .text(pWidth / 2, (pHeight / 4) * 3 + 16, "Spacebar to jump")
  .attr({
    "font-family": "Trebuchet MS",
    "font-size": 12,
    fill: "white",
    opacity: 0.6,
  });
var controlText4 = paper
  .text(
    pWidth / 2,
    (pHeight / 4) * 3 + 40,
    "Tip: Press and hold the spacebar at times!"
  )
  .attr({
    "font-family": "Trebuchet MS",
    "font-size": 10,
    fill: "white",
    opacity: 0.6,
  });

startButton.node.addEventListener("click", function () {
  startGame();
});

startText.node.addEventListener("click", function () {
  startGame();
});

//==================================================================================
//=================================== LOSE GAME  ===================================

var endGameLose = function () {
  clearInterval(mainLoopInterval);
  clearInterval(waterInterval);
  platforms = []; //empty platform array before next game

  loseAudio.play();
  bgAudio.volume = bgAudio.volume / 2;

  var loseScreen = paper
    .rect(0, 0, pWidth, pHeight)
    .attr({ fill: "white", "fill-opacity": 0.6, "stroke-width": 0 });
  var loseText = paper.text(pWidth / 2, pHeight / 2 - 90, "Game Over").attr({
    "font-family": "Trebuchet MS",
    "font-size": 25,
  });
  var loseText2 = paper
    .text(pWidth / 2, pHeight / 2 - 50, "Your score was: " + score)
    .attr({
      //inform players of score
      "font-family": "Trebuchet MS",
      "font-size": 16,
    });

  showRestartButton();
};

//==================================================================================
//================================ RESTART button  =================================

//function to create restart button with event listeners
var showRestartButton = function () {
  var restartButton = paper.rect(
    pWidth / 2 - buttonWidth / 2,
    pHeight / 2 - buttonHeight / 2,
    buttonWidth,
    buttonHeight
  );
  restartButton.attr({ fill: "grey" });

  var restartText = paper.text(pWidth / 2, pHeight / 2, "RESTART").attr({
    "font-family": "Trebuchet MS",
    "font-size": 20,
  });

  restartButton.node.addEventListener("click", function () {
    startGame();
  });

  restartText.node.addEventListener("click", function () {
    startGame();
  });
};

//==================================================================================
//================================= PAUSE button  ==================================

//function to create pause button with event listeners
var showPauseButton = function () {
  var pauseBg = paper.rect(10, 10, 30, 30, 5).attr({
    fill: "#f2fbfd",
    opacity: 0.3,
  });

  var line1 = paper.rect(17, 17, 5, 16, 1).attr({
    fill: "#f2fbfd",
    stroke: "#f2fbfd",
    opacity: 0.9,
  });

  var line2 = paper.rect(28, 17, 5, 16, 1).attr({
    fill: "#f2fbfd",
    stroke: "#f2fbfd",
    opacity: 0.9,
  });

  pauseBg.node.addEventListener("click", function () {
    gamePause();
  });

  line1.node.addEventListener("click", function () {
    gamePause();
  });

  line2.node.addEventListener("click", function () {
    gamePause();
  });
};

var pauseScreen;
var pauseText;
var resumeButton;
var resumeText;

//function to create pause screen + pause game intervals
var gamePause = function () {
  pauseScreen = paper.rect(0, 0, pWidth, pHeight).attr({
    fill: "white",
    "fill-opacity": 0.6,
    "stroke-width": 0,
  });

  pauseText = paper.text(pWidth / 2, pHeight / 2 - 70, "Game Paused").attr({
    "font-family": "Trebuchet MS",
    "font-size": 25,
  });

  //pause game by clearing intervals
  clearInterval(mainLoopInterval);
  clearInterval(waterInterval);
  bgAudio.volume = bgAudio.volume / 2;

  showResumeButton();
};

var hideResumeButton = function () {
  resumeButton.hide();
  resumeText.hide();
  pauseScreen.hide();
  pauseText.hide();

  //resume games play by resetting intervals
  mainLoopInterval = setInterval(mainLoop, 10);
  waterInterval = setInterval(waterMoveUp, 100);
  bgAudio.volume = soundVolume.value;
};

var showResumeButton = function () {
  resumeButton = paper.rect(
    pWidth / 2 - buttonWidth / 2,
    pHeight / 2 - buttonHeight / 2,
    buttonWidth,
    buttonHeight
  );
  resumeButton.attr({ fill: "grey" });

  resumeText = paper.text(pWidth / 2, pHeight / 2, "RESUME").attr({
    "font-family": "Trebuchet MS",
    "font-size": 20,
  });

  resumeButton.node.addEventListener("click", function () {
    hideResumeButton();
  });

  resumeText.node.addEventListener("click", function () {
    hideResumeButton();
  });
};

//==================================================================================
//============================  Difficulty Adjustment ==============================

// Create variables and initialise to appropriate values for start of gameplay
var platWidth = 90;
var platHeight = 5;
var platNum = 5; //initialised to 5, excluding starting platform

var diffAdj = function () {
  if (score > 14 && score % 5 === 0 && platWidth > 30) {
    //from 15 onwards, every 5 platforms until platwidth=30,
    platWidth -= 3; //reduce platform width by 3px
    console.log("new platWidth is " + platWidth);
  }
};
//==================================================================================
//================================ Create platforms ================================

//define position of starting platform
var startX = 20;
var startHeight = pHeight - 60;
var platforms = []; //array for platforms
var heightChange = 80; // create variable to store height diff between platforms

//create first platform, unrandomised
var createStartPlat = function () {
  platforms[0] = paper.rect(startX, startHeight, platWidth, platHeight);
  platforms[0].attr({ fill: "white" });

  //give attributes
  platforms[0].x = platforms[0].attr("x");
  platforms[0].y = platforms[0].attr("y");
  platforms[0].index = 0;
  platforms[0].outOfScreen = false;
};

//create next 5 platforms with randomised posx with while loop
var createPlatforms = function (platNum) {
  var i = 1; //counter initialised to 1 to account for startPlat

  while (i <= platNum) {
    //generate random Xpos for new plat
    //account for platWidth + 20px padding for right side of screen
    let newX = Math.random() * (pWidth - platWidth - 20);

    //create platform and style
    platforms[i] = paper.rect(
      newX,
      startHeight - heightChange * i,
      platWidth,
      platHeight
    );
    platforms[i].attr({ fill: "white" });

    //create atributes on each platform
    platforms[i].x = newX;
    platforms[i].y = platforms[i].attr("y");
    //platforms[i].name= `platforms[${i}]`;
    platforms[i].index = i;
    platforms[i].outOfScreen = false; //attribute to check if platform has exited the screen

    //platforms[i].gold=false; //attribute to check for gold power-up; not implemented yet
    console.log("platforms[" + i + "].y is " + platforms[i].y);

    i++; //increase counter
  }
};

//==================================================================================
//=============================== Create Player Ball ===============================
var rad = 10;
var initx = startX + platWidth / 2;
var inity = startHeight - 40;

var ball;
var currentPlatIndex; //important variable to store which platform player is standing on

//function to create player
var createBall = function () {
  //create ball object, style it purple
  ball = paper.circle(initx, inity, rad);
  ball.attr({ fill: "purple", "stroke-width": 0 });

  //create properties to track its "state"
  ball.posX = initx;
  ball.posY = inity;
  console.log("ball.posX is " + ball.posX + " and ball.posY is " + ball.posY);

  //create properties to ball to track rate of disk moving
  ball.xrate;
  ball.yrate = 0.1; //default downwards "falling" movement of ball
};

//==================================================================================
//===================================== Power-ups ==================================

/* NOT IMPLEMENTED 
var powerUps=[]; //create array to hold powerUps 

var createPowerUp= function(){
    
    if (score>=10){ //power-ups generate only when above score 25
        platforms.forEach(plat =>{

            if (plat.outOfScreen===false && plat.gold===false){
                plat.gold=true //run the decision to create gold on every platform once only
                let xx = Math.random()*1 //create probablity to decide if gold shld appear on the platform
                console.log("random xx is "+xx)
                if (xx>=0.8){ // 20% chance gold will appear on platform

                    //CREATE GOLD
                    var gold = paper.rect((plat.x+platWidth/2-7.5), (plat.y-rad), 15, 8).attr({"fill":"yellow","stroke":"yellow"})
                    powerUps.push(gold) //push to powerUps array
                    gold.y=gold.attr('y') //set attribute for y so that can be used in movePlatforms()
                    console.log("gold created on platform" + plat.index)
                }
            }
        })
    }
}
*/

//==================================================================================
//================================= Make water level ===============================
var water;
var waterChange = 0.7;
var waterMoveUp;

var createWater = function () {
  water = paper.rect(0, pHeight * 0.95, pWidth, pHeight);
  water.attr({ fill: "cyan", "fill-opacity": 0.4, "stroke-width": 0 });
  water.y = water.attr("y"); //create attribute to track water height

  //create flashing effects with .animate, alternating two animations
  var waterflash1 = function () {
    water.animate({ fill: "white", "fill-opacity": 0.8 }, 700, waterflash2);
  };
  var waterflash2 = function () {
    water.animate({ fill: "cyan", "fill-opacity": 0.4 }, 700, waterflash1);
  };
  waterflash1();

  //move water level up by waterChange, function to be called in setInterval
  waterMoveUp = function () {
    water.y -= waterChange;
    water.attr({ y: water.y });
  };

  waterInterval = setInterval(waterMoveUp, 100); //setInterval assigned to previously created global variable
};

//==================================================================================
//============================= Create Gravity on Ball =============================

var gravity = 0.1;
var ballState = "falling";

//create function for ball to fall with GRAVITY effect + COLLISION MASK with platforms
var ballGravity = function () {
  //PLATSFORMSUNDER array
  //create array to check for platforms beneathe ball.attr('cy')
  let platformsUnder = []; //create variable here to ensure that platformsUnder is empty everytime it checks
  for (let i = 0; i < platforms.length; i++) {
    //check through entire array
    if (ball.attr("cy") <= platforms[i].y) {
      //if ball is above platform, add platform to platformsUnder
      platformsUnder.push(platforms[i]);
    }
  }

  //GRAVITY
  //when ballState = is "falling", ball falls with gravity effect
  if (ballState === "falling") {
    ball.posY += ball.yrate;

    //acceleration as time passes (setInterval)
    ball.yrate += gravity;

    //move ball using 'state' variables
    ball.attr({ cy: ball.posY });
  }

  //COLLISION MASK
  //while falling check if hit any platforms from platformsUnder
  platformsUnder.forEach((plat) => {
    // if hit plat, change to "landed"
    if (
      ball.attr("cy") + rad >= plat.y &&
      ball.posX >= plat.x &&
      ball.posX <= plat.x + platWidth
    ) {
      ball.posY = plat.y - rad;
      ball.yrate = 0;

      //console.log(ballState)
      //console.log("function hit plat running and ball.posY is "+ball.posY);
      ballState = "landed";
      currentPlatIndex = plat.index; //update currentPlatIndex to track which plat the player is on
      updateProgress(); //update score/highscore if applicable

      //console.log(score);
      //console.log("currently on platforms["+currentPlatIndex+"] and .x is "+platforms[currentPlatIndex].x)
      movePlatforms();
    } else {
      ballState = "falling";
    } // when fall off boundary, change back to falling and trigger GRAVITY
  });
};

//==================================================================================
//=========================== Update score and level ===============================
let highScore = 0; //initialised to 0 ;
let highScoreState;
//meanwhile "score" var initialise in startGame function bc need to reset

//update scores and highscore
var updateProgress = function () {
  if (currentPlatIndex > score) {
    score = currentPlatIndex;
    document.getElementById("score").innerHTML = score;
    diffAdj();
    //createPowerUp();
  }

  if (score > highScore) {
    highScore = score;
    document.getElementById("hscore").innerHTML = highScore;
    if (
      highScoreState != "broken" && //set if condition based on highscore state to play audio ONCE upon breaking highscore per game
      highScore != 1
    ) {
      //set second if condition to play hscoreAudio only when player has broken his own hscore (ie. not upon first game)
      hscoreAudio.play();
      hscoreAudio.volume = soundVolume.value;

      //if break highscore in a game, create "New Highscore!" text for player visual feedback
      var hscoreText = paper
        .text(pWidth / 2, pHeight / 4, "New Highscore!")
        .attr({
          "font-family": "Trebuchet MS",
          "font-size": 14,
          stroke: "white",
          fill: "white",
        });
      hscoreText.animate({ opacity: 0 }, 4000); //make "New Highscore!" text disppear after 4 seconds
    }

    highScoreState = "broken"; // change state so that breaking highscore happens only once per game
  }
};

//==================================================================================
//================= Make platforms move upwards as player moves ====================

//mimic climbing up, maintain ball at a height; tie to height of platform the player lands on
var newPlatform;

var movePlatforms = function () {
  //if highest platform jumped on exceeds height of second plat on screen
  if (platforms[score].y < startHeight - heightChange) {
    //MOVE PLATFORMS; maintain platforms at original second plat height
    platforms.forEach((plat) => {
      plat.y += heightChange;
      plat.animate({ y: plat.y }, 200, "linear");

      //REMOVING PLATFORM IF IT EXITS SCREEN + CREATE NEW PLATFORM
      if (plat.y >= pHeight) {
        console.log("a platform hit bottom!");

        //make platform invisible if reach bottom of the screen (i.e. exceeds pHeight)
        plat.attr({ "fill-opacity": 0, "stroke-opacity": 0 });

        if (plat.outOfScreen === false) {
          plat.outOfScreen = true;

          //make y to top of screen then randomised x
          let newX = Math.random() * (pWidth - platWidth - 20); //randomise x
          newPlatform = paper.rect(
            newX,
            plat.y - heightChange * 6,
            platWidth,
            platHeight
          ); //create new platform
          newPlatform.attr({ fill: "white" });
          platforms.push(newPlatform);

          //create atributes on each newPlatform
          newPlatform.x = newX;
          newPlatform.y = newPlatform.attr("y");
          newPlatform.index = platforms.indexOf(newPlatform);
          newPlatform.outOfScreen = false;
          console.log(
            "plat remove is" +
              plat.index +
              "newPlat created is " +
              newPlatform.index +
              "at y= " +
              newPlatform.y
          );
        }
      }
    });

    //MOVE WATER LEVEL according to movement of platforms
    if (water.attr("y") < pHeight * 0.98) {
      //check water above set limit
      if (water.y + heightChange < pHeight * 0.98) {
        //if water level lowers by full heightChange is still within set limit,
        water.y += heightChange; //lower water level by full heightChange such that it follows platform mvmt exactly
        water.animate({ y: water.y }, 200, "linear");
      } else {
        //if water level above set limit BUT changing by heightChange will make it exceed set limit,
        water.y = pHeight * 0.98; //lower water level till set limit only, therefore keeping it on screen
        water.animate({ y: water.y }, 200, "linear");
      }
    }

    /*NOT IMPLEMENTED

        //MOVE POWERUPS according to platform mvmt
        powerUps.forEach(item => {
            item.y+=heightChange
            item.animate({'y':item.y},200,"linear");

            if (item.y>=pHeight){
                item.attr({"fill-opacity":0, "stroke-opacity":0})
            }
        }) 
        */
  }
};

//==================================================================================
//==================================== Controls ====================================
var mvmt = 3;
var keys = [];

//add 'keydown' event listener to entire document
document.addEventListener("keydown", function (ev) {
  if (ev.which === 37) {
    console.log("left arrow pressed");
    ev.preventDefault(); //prevent window from moving bc of left arrow key
    keys[37] = true;
  }

  if (ev.which === 39) {
    ev.preventDefault();
    console.log("right arrow pressed");
    ev.preventDefault(); //prevent window from moving bc of right arrow key
    keys[39] = true;
  }

  if (ev.which === 32) {
    ev.preventDefault();
    console.log("spacebar pressed");
    ev.preventDefault(); //prevent window from moving bc of spacebar
    keys[32] = true;
  }
});

//add 'keyup' event listener to entire document; ensures movements stops when keyup
document.addEventListener("keyup", function (ev) {
  if (ev.which === 37) {
    keys[37] = false;
  }
  if (ev.which === 39) {
    keys[39] = false;
  }
  if (ev.which === 32) {
    keys[32] = false;
  }
});

// creating JUMP for spacebar
var ballJump = 5;
var jump = function () {
  ball.posY -= ballJump;
  ball.attr({ cy: ball.posY });
  console.log("jump up!");
};

//MAINLOOP function calling ballGravity, creates player movement, checks for endGame
var mainLoop = function () {
  //ball always has gravity, falls unless on platform
  ballGravity();

  if (keys[37] === true) {
    ball.posX -= mvmt;
    ball.attr({ cx: ball.posX });
  }

  if (keys[39] === true) {
    ball.posX += mvmt;
    ball.attr({ cx: ball.posX });
  }

  if (keys[32]) {
    jump();
  }

  //keep within SCREEN LIMITS
  if (ball.attr("cx") <= rad) {
    //if touch left screen limit, keep ball there
    ball.posX = 10;
  } else if (ball.attr("cx") >= pWidth - rad) {
    //if touch right screen limit, keep ball there
    ball.posX = pWidth - 10;
  }

  if (ball.attr("cy") <= 0) {
    //if hit top of screen, keep ball there
    ball.posY = 0;
  }

  //check for ENDGAME
  if (water.attr("y") <= ball.attr("cy") + rad) {
    // if ball touches water level
    endGameLose();
  }
};

/*

//==================================================================================
//================================== Tilt Sensors ==================================
//NOT IMPLEMENTED

//Get permission for device orientation for IOS

document.getElementById("permissionButton").addEventListener("click", function(){
    if (window.DeviceOrientationEvent && window.DeviceOrientationEvent.requestPermission){
        window.DeviceOrientationEvent.requestPermission();
    }
});


//new mainLoop for mobile device tilt sensors; remove keys array;
var mainLoop2= function(){

    //ball always has gravity, falls unless on platform
    ballGravity();

    
    ball.posX += mvmt; //movement can be negative; assigned in following module
    ball.attr({'cx': ball.posX});

    //keep within screen limits
    if (ball.attr('cx')<=rad){
        ball.posX=10
    } else if (ball.attr('cx')>=pWidth-rad){
        ball.posX=pWidth-10};

    //check for hit top of screen
    if(ball.attr('cy')<=0){
        ball.posY=0
    } 

    //check for if ball drops down (ie no touch water effect now)
    if (ball.attr('cy')>=pHeight-rad){
        endGameLose();
    }

    if (water.attr('y')<=ball.attr('cy')+rad){
        endGameLose();
    }
};


if (window.DeviceOrientationEvent) {

    clearInterval(mainLoop); //if sense device orientation, clear interval for mainLoop with keypresses
    setInterval(mainLoop2); //set new interval for mainLoop2

    window.addEventListener("deviceorientation", function(ev){
        mvmt=ev.gamma/90; //assign mvmt based on gamma (tilting right and left)
        aside.innerHTML=mvmt;

    })
}

*/
