// SCREEN 7

class ScreenSeven {
  constructor() {
    // text
    this.text1 = 'hi! \nwelcome to';
    this.text2 = 'GrindHr\n👋';
    this.text3 = "let's begin";

    // icon(s)
    this.icon1 = loadImage('assets/grindhr_logo.png');
    
    this.icon2 = loadImage('assets/main_button.png', img => {
      this.icon2W = img.width;
      this.icon2H = img.height;
    });
    this.icon2X = width / 2;
    this.icon2Y = height - 100;
    
    this.icon3 = loadImage('assets/arrow_back.png', img => {
      this.icon3W = img.width;
      this.icon3H = img.height;
    });
    this.icon3X = 30;
    this.icon3Y = 30;
  }

  // display screen
  display() {
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 'transparent';
    drawingContext.filter = 'none';
    
    background(38, 38, 38, 45);
    textAlign(CENTER);
    imageMode(CENTER);

    image(this.icon1, width / 2, 160);

    fill('white');
    textSize(46);
    textStyle(NORMAL);
    text(this.text1, width / 2, (height / 2) - 90);

    textSize(60);
    textStyle(BOLD);
    text(this.text2, width / 2, (height / 2) + 35);

    image(this.icon2, this.icon2X, this.icon2Y);
    image(this.icon3, this.icon3X, this.icon3Y);
    
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon2H / 2
    ) {
      fill('white');
      textSize(36);
      textStyle(ITALIC);
      text(this.text3, width / 2, height - 90);
    } else {
      fill('white');
      textSize(34);
      textStyle(ITALIC);
      text(this.text3, width / 2, height - 90);
    }
  }

  // handle screen switches
  mousePressed() {
    // switch to next screen
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon2H / 2
    ) {
      switchScreen(screenEight);
    }
    // switch to previous screen
    if (
      mouseX > this.icon3X - this.icon3W / 2 &&
      mouseX < this.icon3X + this.icon3W / 2 &&
      mouseY > this.icon3Y - this.icon3H / 2 &&
      mouseY < this.icon3Y + this.icon3H / 2
    ) {
      switchScreen(screenSix);
    }
  }
}
