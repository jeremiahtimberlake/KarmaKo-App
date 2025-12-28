// SCREEN 5

class ScreenFive {
  constructor() {
    // text
    this.text1 = 'how your score \nworks:';
    this.text2 = 'your KarmaScore is always \ndisplayed on your profile, \nalong with everyone else’s.';
    this.text3 = 'use profiles and \nKarmaScores to determine \nif you think other users \nwould be a good match for \nyou!';
    this.text4 = 'your KarmaScore is tracked \nthrough your actions inside \nand outside of the app!'
    this.text5 = 'continue';
    
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
    
    this.icon4 = loadImage('assets/karma_score_1.png');
    this.icon5 = loadImage('assets/karma_score_2.png');
    this.icon6 = loadImage('assets/karma_score_3.png');
  }
  
  // display screen
  display() {
    background(38, 38, 38, 45);
    textStyle(NORMAL);
    imageMode(CENTER);
    
    image(this.icon1, this.icon1X, this.icon1Y);
    image(this.icon2, this.icon2X, this.icon2Y);
    
    fill('white');
    textSize(30)
    textAlign(CENTER);
    text(this.text1, width / 2, 140);
    
    fill('white');
    textSize(22);
    textAlign(LEFT);
    text(this.text2, (width / 2) - 140, 225);
    text(this.text3, (width / 2) - 140, (height / 2) + 35);
    text(this.text4, (width / 2) - 140, height - 220);
    
    image(this.icon6, 305, (height / 2) - 55);
    image(this.icon5, width / 2, (height / 2) - 65);
    image(this.icon4, 95, (height / 2) - 55);
    
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon2H / 2
    ) {
      fill('white');
      textSize(36);
      textStyle(ITALIC);
      textAlign(CENTER);
      text(this.text5, width / 2, height - 80);
    } else {
      fill('white');
      textSize(34);
      textStyle(ITALIC);
      textAlign(CENTER);
      text(this.text5, width / 2, height - 80);
    }
    
    image(this.icon3, this.icon3X, this.icon3Y);
  }
  
  // handle screen interaction(s)
  mousePressed() {
    // switch to next screen
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon2H / 2
    ) {
      switchScreen(screenSix);
    }
    // switch to previous screen
    if (
      mouseX > this.icon3X - this.icon3W / 2 &&
      mouseX < this.icon3X + this.icon3W / 2 &&
      mouseY > this.icon3Y - this.icon3H / 2 &&
      mouseY < this.icon3Y + this.icon3H / 2
    ) {
      switchScreen(screenFour);
    }
  }
}
