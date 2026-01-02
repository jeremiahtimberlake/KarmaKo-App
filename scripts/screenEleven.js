// SCREEN 11

class ScreenEleven {
  constructor() {
    // text
    this.text1 = 'people nearby';
    this.text2 = 'tap on a profile to learn more!';
    
    // icon(s)
    this.icon1 = loadImage('assets/arrow_back.png', img => {
      this.icon1W = img.width;
      this.icon1H = img.height;
    });
    this.icon1X = 30;
    this.icon1Y = 30;
    
    this.icon2 = loadImage('assets/g_nav_bar_2.png', img => {
      this.icon2W = img.width;
      this.icon2H = img.height;
    });
    this.icon2X = width / 2;
    this.icon2Y = height - 35;
    
    this.icon3 = loadImage('assets/g_profile_1.png', img => {
      this.icon3W = img.width;
      this.icon3H = img.height;
    });
    this.icon3X = 105;
    this.icon3Y = 270;
    
    this.icon4 = loadImage('assets/g_profile_2.png', img => {
      this.icon4W = img.width;
      this.icon4H = img.height;
    });
    this.icon4X = 295;
    this.icon4Y = 270;
    
    this.icon5 = loadImage('assets/g_profile_3.png', img => {
      this.icon5W = img.width;
      this.icon5H = img.height;
    });
    this.icon5X = 105;
    this.icon5Y = 500;
    
    this.icon6 = loadImage('assets/g_profile_4.png', img => {
      this.icon6W = img.width;
      this.icon6H = img.height;
    });
    this.icon6X = 295;
    this.icon6Y = 500;
    
    this.icon7 = loadImage('assets/g_profile_5.png', img => {
      this.icon7W = img.width;
      this.icon7H = img.height;
    });
    this.icon7X = 105;
    this.icon7Y = 730;
    
    this.icon8 = loadImage('assets/g_profile_6.png', img => {
      this.icon8W = img.width;
      this.icon8H = img.height;
    });
    this.icon8X = 295;
    this.icon8Y = 730;
    
    // scroll variables
    this.scrollY = 0;
    this.contentHeight = 825;
  }
  
  display() {
    background(38, 38, 38);
    textAlign(CENTER);
    imageMode(CENTER);
    
    let maxScroll = -(this.contentHeight - height + 100);  
    this.scrollY = constrain(this.scrollY, maxScroll, 0);
    
    push();
    translate(0, this.scrollY);
    
    fill('white');
    textSize(36)
    textStyle(BOLD);
    text(this.text1, width / 2, 110);
    
    fill('white');
    textSize(14)
    textStyle(ITALIC);
    text(this.text2, width / 2, 135);
    
    image(this.icon1, this.icon1X, this.icon1Y);
    
    image(this.icon3, this.icon3X, this.icon3Y);
    image(this.icon4, this.icon4X, this.icon4Y);
    image(this.icon5, this.icon5X, this.icon5Y);
    image(this.icon6, this.icon6X, this.icon6Y);
    image(this.icon7, this.icon7X, this.icon7Y);
    image(this.icon8, this.icon8X, this.icon8Y);
    
    pop();
    
    image(this.icon2, this.icon2X, this.icon2Y);
  }
  
  // handle screen interaction(s)
  mousePressed() {
    // switch to profile
    if (
      mouseX > this.icon3X - this.icon3W / 2 &&
      mouseX < this.icon3X + this.icon3W / 2 &&
      mouseY > this.icon3Y - this.icon3H / 2 &&
      mouseY < this.icon3Y + this.icon3H / 2
    ) {
      switchScreen(screenTwelve);
    }
    // switch to previous screen
    if (
      mouseX > this.icon1X - this.icon1W / 2 &&
      mouseX < this.icon1X + this.icon1W / 2 &&
      mouseY > this.icon1Y - this.icon1H / 2 &&
      mouseY < this.icon1Y + this.icon1H / 2
    ) {
      switchScreen(screenTen);
    }
  }
}