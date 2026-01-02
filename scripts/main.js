// KarmaKo

// video
let appVideo;

// screen variables
let currentScreen;
let screenOne;
let screenTwo;
let screenThree;
let screenFour;
let screenFive;
let screenSix;
let screenSeven;
let screenEight;
let screenNine;
let screenTen;
let screenEleven;
let screenTwelve;
let screenThirteen

function setup() {
  // set phone size
  createCanvas(400, 850);
  
  // initialize video
  appVideo = createCapture(VIDEO, {flipped: true});
  appVideo.hide();

  // initialize screens
  screenThirteen = new ScreenThirteen();
  screenTwelve = new ScreenTwelve();
  screenEleven = new ScreenEleven();
  screenTen = new ScreenTen();
  screenNine = new ScreenNine();
  screenEight = new ScreenEight();
  screenSeven = new ScreenSeven();
  screenSix = new ScreenSix();
  screenFive = new ScreenFive();
  screenFour = new ScreenFour();
  screenThree = new ScreenThree();
  screenTwo = new ScreenTwo();
  screenOne = new ScreenOne();
  
  // start app with screen one
  currentScreen = screenOne;
}

// display current screen
function draw() {
  currentScreen.display();
}

// handle screen interaction(s)
function mousePressed() {
  currentScreen.mousePressed();
}

// handle screen interaction(s)
function mouseReleased() {
  if (currentScreen && typeof currentScreen.mouseReleased === "function") {
    currentScreen.mouseReleased();
  }
}

// switch to a specific screen
function switchScreen(newScreen) {
  // hide old screen DOM elements if the method exists
  if (currentScreen && typeof currentScreen.hide === "function") {
    currentScreen.hide();
  }

  // switch screens
  currentScreen = newScreen;

  // show new screen DOM elements if the method exists
  if (typeof currentScreen.show === "function") {
    currentScreen.show();
  }
}

// handle screen scrolling if necessary
function mouseWheel(event) {
  if (currentScreen instanceof ScreenEleven || screenTwelve) {
    currentScreen.scrollY -= event.delta;
  }
}

