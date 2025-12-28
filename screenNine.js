// SCREEN 9

class ScreenNine {
  constructor() {
    // text
    this.textOffset = 45;
    this.text1 = 'what to know';
    this.text2 = 'GrindHr will choose photos \nand create a profile for you! \nall you need to do is edit \nresponses to prompts and \nyour profile will be live!';
    this.text3 = 'your KarmaScore will always \nbe on your profile, so people \ncan get to know you better, \nand you can get to know \neveryone else.';
    this.text4 = 'if you need to make edits, it \nwill all be available in your \nprofile tab under “settings.”';
    this.text5 = 'you can message people you \nlike, and start a conversation \nif they like you back!';
    this.text6 = 'next';
    
    // icon(s)
    this.icon1 = loadImage('assets/main_button.png', img => {
      this.icon1W = img.width;
      this.icon1H = img.height;
    });
    this.icon1X = width / 2;
    this.icon1Y = height - 130;
    
    this.icon2 = loadImage('assets/arrow_back.png', img => {
      this.icon2W = img.width;
      this.icon2H = img.height;
    });
    this.icon2X = 30;
    this.icon2Y = 30;
    
    this.icon3 = loadImage('assets/g_nav_bar_1.png', img => {
      this.icon3W = img.width;
      this.icon3H = img.height;
    });
    this.icon3X = width / 2;
    this.icon3Y = height - 35;
  }
  
  // display screen
  display() {
    background(38, 38, 38, 45);
    textAlign(CENTER);
    imageMode(CENTER);
    
    fill('white');
    textSize(36)
    textStyle(BOLD);
    text(this.text1, width / 2, 110);
    
    fill('white');
    textSize(22)
    textStyle(NORMAL);
    text(this.text2, width / 2, 170);
    text(this.text3, width / 2, 330);
    text(this.text4, width / 2, 490);
    text(this.text5, width / 2, 600);
    
    image(this.icon1, this.icon1X, this.icon1Y);
    image(this.icon2, this.icon2X, this.icon2Y);
    image(this.icon3, this.icon3X, this.icon3Y);
    
    if (
      mouseX > this.icon1X - this.icon1W / 2 &&
      mouseX < this.icon1X + this.icon1W / 2 &&
      mouseY > this.icon1Y - this.icon1H / 2 &&
      mouseY < this.icon1Y + this.icon1H / 2
    ) {
      fill('white');
      textSize(36);
      textStyle(ITALIC);
      text(this.text6, width / 2, height - 120);
    } else {
      fill('white');
      textSize(34);
      textStyle(ITALIC);
      text(this.text6, width / 2, height - 120);
    }
  }
  
  // handle screen interaction(s)
  mousePressed() {
    // switch to next screen
    if (
      mouseX > this.icon1X - this.icon1W / 2 &&
      mouseX < this.icon1X + this.icon1W / 2 &&
      mouseY > this.icon1Y - this.icon1H / 2 &&
      mouseY < this.icon1Y + this.icon1H / 2
    ) {
      switchScreen(screenTen);
    }
    // switch to previous screen
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon2H / 2
    ) {
      switchScreen(screenEight);
    }
  }
}
