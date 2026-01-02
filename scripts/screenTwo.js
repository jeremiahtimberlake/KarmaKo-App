// SCREEN 2

// DEV NOTES:
// maybe add a delay for the continue button to pop up, to make sure they’ve scanned their face
// add in face mesh mask

class ScreenTwo {
  constructor() {
    // text
    this.text1 = 'first, let’s get a \ngood look at you!';
    this.text2 = 'continue';
    
    // icon(s)
    this.icon1 = loadImage('assets/karmako_logo_2.png', img => {
      this.icon1W = img.width;
      this.icon1H = img.height;
    });
    this.icon1X = width / 2;
    this.icon1Y = 65;
    
    this.icon2 = loadImage('assets/main_button.png', img => {
      this.icon2W = img.width;
      this.icon2H = img.height;
    });
    this.icon2X = width / 2;
    this.icon2Y = height - 90;
    
    this.icon3 = loadImage('assets/arrow_back.png', img => {
      this.icon3W = img.width;
      this.icon3H = img.height;
    });
    this.icon3X = 30;
    this.icon3Y = 30;
    
    // face mesh
    this.faces = [];
    this.video = appVideo;
    this.faceMesh = ml5.faceMesh(
      { maxFaces: 1, flipped: true },
        () => {
        this.faceMesh.detectStart(this.video, (results) => this.gotFaces(results));
  }
);
  }

  // display screen
  display() {
    background(38, 38, 38, 45);
    textAlign(CENTER);
    imageMode(CENTER);
    
    image(this.icon1, this.icon1X, this.icon1Y);

    image(this.video, width / 2, (height / 2) + 30, 305, 465);
    
    fill('white');
    textSize(30)
    textStyle(NORMAL);
    text(this.text1, width / 2, 140);
    
    image(this.icon2, this.icon2X, this.icon2Y);
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon2H / 2
    ) {
      fill('white');
      textSize(36);
      textStyle(ITALIC);
      text(this.text2, width / 2, height - 80);
    } else {
      fill('white');
      textSize(34);
      textStyle(ITALIC);
      text(this.text2, width / 2, height - 80);
    }
    
    image(this.icon3, this.icon3X, this.icon3Y);
  }
  
  // handle screen switches
  mousePressed() {
    // switch to next screen
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon1H / 2
    ) {
      switchScreen(screenThree);
    }
    // switch to previous screen
    if (
      mouseX > this.icon3X - this.icon3W / 2 &&
      mouseX < this.icon3X + this.icon3W / 2 &&
      mouseY > this.icon3Y - this.icon3H / 2 &&
      mouseY < this.icon3Y + this.icon3H / 2
    ) {
      switchScreen(screenOne);
    }
  }
  
  // handle face mesh results
  gotFaces(results) {
    this.faces = results;
  }
}
