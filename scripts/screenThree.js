// SCREEN 3

class ScreenThree {
  constructor() {
    // text
    this.text1 = 'some things we \nneed from you:';
    this.text2 = 'by pressing "agree" you \nagree KarmaKo has access \nto the following:';
    this.text3 = '•  your contacts \n•  your social media \naccounts \n•  your location \n•  your camera \n•  your microphone \n•  other'
    this.text4 = "that's all we need before you \nhave the chance to meet \nyour future!"
    this.text5 = 'agree';
    
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
    
    // text background
    this.rec = loadImage('assets/text_rec.png', img => {
      this.recW = img.width;
      this.recH = img.height;
    });
    this.recX = width / 2;
    this.recY = (height / 2) + 30;
  }

  // display screen
  display() {
    push();
    background(38, 38, 38, 45);
    textAlign(CENTER);
    imageMode(CENTER);
    
    image(this.icon1, this.icon1X, this.icon1Y);
    
    image(this.rec, this.recX, this.recY);
    
    fill('white');
    textSize(30)
    textStyle(NORMAL);
    text(this.text1, width / 2, 140);
    
    fill('black');
    textSize(20)
    textStyle(NORMAL);
    textAlign(LEFT);
    textLeading(30);
    text(this.text2, this.recX - (this.recW / 2) + 35, this.recY - (this.recH / 2) + 30);
    text(this.text3, this.recX - (this.recW / 2) + 35, this.recY - 85);
    text(this.text4, this.recX - (this.recW / 2) + 35, this.recY + (this.recH / 2) - 75);
    
    
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
    pop();
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
      switchScreen(screenFour);
    }
    // switch to previous screen
    if (
      mouseX > this.icon3X - this.icon3W / 2 &&
      mouseX < this.icon3X + this.icon3W / 2 &&
      mouseY > this.icon3Y - this.icon3H / 2 &&
      mouseY < this.icon3Y + this.icon3H / 2
    ) {
      switchScreen(screenTwo);
    }
  }
}
