// SCREEN 13

class ScreenThirteen {
  constructor() {
    // icon(s)
    this.icon1 = loadImage('assets/arrow_back.png', img => {
      this.icon1W = img.width;
      this.icon1H = img.height;
    });
    this.icon1X = 30;
    this.icon1Y = 30;
    
    this.icon2 = loadImage('assets/g_nav_bar_3.png', img => {
      this.icon2W = img.width;
      this.icon2H = img.height;
    });
    this.icon2X = width / 2;
    this.icon2Y = height - 35;
    
    this.icon3 = loadImage('assets/profile_banner.png', img => {
      this.icon3W = img.width;
      this.icon3H = img.height;
    });
    this.icon3X = width / 2;
    this.icon3Y = 65;
    
    this.icon4 = loadImage('assets/chat_bar.png', img => {
      this.icon4W = img.width;
      this.icon4H = img.height;
    });
    this.icon4X = width / 2;
    this.icon4Y = height - 110;
    
    this.icon5 = loadImage('assets/message_1.png', img => {
      this.icon5W = img.width;
      this.icon5H = img.height;
    });
    this.icon5X = 100;
    this.icon5Y = 160;
    
    this.icon6 = loadImage('assets/message_2.png', img => {
      this.icon6W = img.width;
      this.icon6H = img.height;
    });
    this.icon6X = 280;
    this.icon6Y = 230;
  }
  
  display() {
    background(38, 38, 38);
    imageMode(CENTER);
    
    image(this.icon2, this.icon2X, this.icon2Y);
    image(this.icon3, this.icon3X, this.icon3Y);
    image(this.icon1, this.icon1X, this.icon1Y);
    image(this.icon4, this.icon4X, this.icon4Y);
    image(this.icon5, this.icon5X, this.icon5Y);
    image(this.icon6, this.icon6X, this.icon6Y);
  }
  
  // handle screen interaction(s)
  mousePressed() {
    // switch to previous screen
    if (
      mouseX > this.icon1X - this.icon1W / 2 &&
      mouseX < this.icon1X + this.icon1W / 2 &&
      mouseY > this.icon1Y - this.icon1H / 2 &&
      mouseY < this.icon1Y + this.icon1H / 2
    ) {
      switchScreen(screenTwelve);
    }
  }
}