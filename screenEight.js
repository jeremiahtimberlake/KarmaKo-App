// SCREEN 8

class ScreenEight {
  constructor() {
    // text
    this.text1 = 'how would you like \nto use GrindHr?';
    this.text1X = width / 2;
    this.text1Y = 185

    // icon(s)
    this.iconOffset = 85;
    this.icon1 = loadImage('assets/main_button.png', img => {
      this.icon1W = img.width;
      this.icon1H = img.height;
    });
    this.icon1X = width / 2;
    this.icon1Y = this.text1Y + 140;
    
    this.icon2 = loadImage('assets/main_button.png', img => {
      this.icon2W = img.width;
      this.icon2H = img.height;
    });
    this.icon2X = width / 2;
    this.icon2Y = this.icon1Y + this.iconOffset;
    
    this.icon3 = loadImage('assets/main_button.png', img => {
      this.icon3W = img.width;
      this.icon3H = img.height;
    });
    this.icon3X = width / 2;
    this.icon3Y = this.icon2Y + this.iconOffset;
    
    this.icon4 = loadImage('assets/main_button.png', img => {
      this.icon4W = img.width;
      this.icon4H = img.height;
    });
    this.icon4X = width / 2;
    this.icon4Y = this.icon3Y + this.iconOffset;
    
    this.icon5 = loadImage('assets/main_button.png', img => {
      this.icon5W = img.width;
      this.icon5H = img.height;
    });
    this.icon5X = width / 2;
    this.icon5Y = this.icon4Y + this.iconOffset;
    
    this.icon6 = loadImage('assets/arrow_back.png', img => {
      this.icon6W = img.width;
      this.icon6H = img.height;
    });
    this.icon6X = 30;
    this.icon6Y = 30;
    
    this.icon7 = loadImage('assets/g_nav_bar_1.png', img => {
      this.icon7W = img.width;
      this.icon7H = img.height;
    });
    this.icon7X = width / 2;
    this.icon7Y = height - 35;
    
    // feature boolean
    this.isUnavail = false;
  }

  // display screen
  display() {
    background(38, 38, 38, 45);
    textAlign(CENTER);
    imageMode(CENTER);
    
    fill('white');
    textSize(36);
    textStyle(NORMAL);
    text(this.text1, this.text1X, this.text1Y);

    image(this.icon1, this.icon1X, this.icon1Y);
    image(this.icon2, this.icon2X, this.icon2Y);
    image(this.icon3, this.icon3X, this.icon3Y);
    image(this.icon4, this.icon4X, this.icon4Y);
    image(this.icon5, this.icon5X, this.icon5Y);
    image(this.icon6, this.icon6X, this.icon6Y);
    
    image(this.icon7, this.icon7X, this.icon7Y);
    
    if (
      mouseX > this.icon1X - this.icon1W / 2 &&
      mouseX < this.icon1X + this.icon1W / 2 &&
      mouseY > this.icon1Y - this.icon1H / 2 &&
      mouseY < this.icon1Y + this.icon1H / 2
    ) {
      fill('white');
      textSize(30);
      textStyle(ITALIC);
      textAlign(CENTER);
      text("to date", this.icon1X, this.icon1Y + 8);
    } else {
      textSize(28);
      textStyle(ITALIC);
      textAlign(CENTER);
      text("to date", this.icon1X, this.icon1Y + 8);
    } 
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon2H / 2
    ) {
      fill('white');
      textSize(30);
      textStyle(ITALIC);
      textAlign(CENTER);
      text("to find love", this.icon2X, this.icon2Y + 8);
    } else {
      fill('white');
      textSize(28);
      textStyle(ITALIC);
      textAlign(CENTER);
      text("to find love", this.icon2X, this.icon2Y + 8);
    }
    if (
      mouseX > this.icon3X - this.icon3W / 2 &&
      mouseX < this.icon3X + this.icon3W / 2 &&
      mouseY > this.icon3Y - this.icon3H / 2 &&
      mouseY < this.icon3Y + this.icon3H / 2
    ) {
      fill('white');
      textSize(30);
      textStyle(ITALIC);
      textAlign(CENTER);
      text("to find casual sex", this.icon3X, this.icon3Y + 8);
    } else {
      fill('white');
      textSize(28);
      textStyle(ITALIC);
      textAlign(CENTER);
      text("to find casual sex", this.icon3X, this.icon3Y + 8);
    }
    if (
      mouseX > this.icon4X - this.icon4W / 2 &&
      mouseX < this.icon4X + this.icon4W / 2 &&
      mouseY > this.icon4Y - this.icon4H / 2 &&
      mouseY < this.icon4Y + this.icon4H / 2
    ) {
      fill('white');
      textSize(30);
      textStyle(ITALIC);
      textAlign(CENTER);
      text("roommates", this.icon4X, this.icon4Y + 8);
    } else {
      fill('white');
      textSize(28);
      textStyle(ITALIC);
      textAlign(CENTER);
      text("roommates", this.icon4X, this.icon4Y + 8);
    }
    if (
      mouseX > this.icon5X - this.icon5W / 2 &&
      mouseX < this.icon5X + this.icon5W / 2 &&
      mouseY > this.icon5Y - this.icon5H / 2 &&
      mouseY < this.icon5Y + this.icon5H / 2
    ) {
      fill('white');
      textSize(30);
      textStyle(ITALIC);
      textAlign(CENTER);
      text("not sure yet", this.icon5X, this.icon5Y + 8);
    } else {
      fill('white');
      textSize(28);
      textStyle(ITALIC);
      textAlign(CENTER);
      text("not sure yet", this.icon5X, this.icon5Y + 8);
    }
    
    if (this.isUnavail == true) {
      textSize(16);
      textStyle(NORMAL);
      text("sorry. this feature is unavailable at the moment.", width / 2, height - 110);
    }
  }

  // handle screen switches
  mousePressed() {
    // switch to next screen
    if (
      mouseX > this.icon1X - this.icon1W / 2 &&
      mouseX < this.icon1X + this.icon1W / 2 &&
      mouseY > this.icon1Y - this.icon1H / 2 &&
      mouseY < this.icon1Y + this.icon1H / 2
    ) {
      this.isUnavail = false;
      switchScreen(screenNine);
    }
    // switch to previous screen
    if (
      mouseX > this.icon6X - this.icon6W / 2 &&
      mouseX < this.icon6X + this.icon6W / 2 &&
      mouseY > this.icon6Y - this.icon6H / 2 &&
      mouseY < this.icon6Y + this.icon6H / 2
    ) {
      switchScreen(screenSeven);
    }
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon2H / 2
    ) {
      this.isUnavail = true;
    }
    if (
      mouseX > this.icon3X - this.icon3W / 2 &&
      mouseX < this.icon3X + this.icon3W / 2 &&
      mouseY > this.icon3Y - this.icon3H / 2 &&
      mouseY < this.icon3Y + this.icon3H / 2
    ) {
      this.isUnavail = true;
    }
    if (
      mouseX > this.icon4X - this.icon4W / 2 &&
      mouseX < this.icon4X + this.icon4W / 2 &&
      mouseY > this.icon4Y - this.icon4H / 2 &&
      mouseY < this.icon4Y + this.icon4H / 2
    ) {
      this.isUnavail = true;
    }
    if (
      mouseX > this.icon5X - this.icon5W / 2 &&
      mouseX < this.icon5X + this.icon5W / 2 &&
      mouseY > this.icon5Y - this.icon5H / 2 &&
      mouseY < this.icon5Y + this.icon5H / 2
    ) {
      this.isUnavail = true;
    }
  }
}
