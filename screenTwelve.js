// SCREEN 12

class ScreenTwelve {
  constructor() {
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
    
    this.icon3 = loadImage('assets/g_profile_info.png', img => {
      this.icon3W = img.width;
      this.icon3H = img.height;
    });
    this.icon3X = width / 2;
    this.icon3Y = 450;
    
    this.icon4 = loadImage('assets/check.png', img => {
      this.icon4W = img.width;
      this.icon4H = img.height;
    });
    this.icon4X = width / 2;
    this.icon4Y = (height / 2) - 100;
    
    this.icon5 = loadImage('assets/x.png', img => {
      this.icon5W = img.width;
      this.icon5H = img.height;
    });
    this.icon5X = width / 2;
    this.icon5Y = (height / 2) - 100;
    
    // swipe colors
    this.firstColor =  color(252, 179, 22, 48);
    this.secondColor = color(255, 0 ,94, 48);
    
    // scroll variables
    this.scrollY = 0;
    this.contentHeight = 810;
    
    // profile boolean
    this.isPressed = false;
  }
  
  // display screen
  display() {
    background(38, 38, 38);
    imageMode(CENTER);
    
    let maxScroll = -(this.contentHeight - height + 100);  
    this.scrollY = constrain(this.scrollY, maxScroll, 0);
    
    push();
    translate(0, this.scrollY);
    
    image(this.icon1, this.icon1X, this.icon1Y);
    
    // swiping
    if (this.isPressed == true) {
      
      // change position of profile to mouseX
      image(this.icon3, mouseX, this.icon3Y, 340, 730);
      
      // matching conditions
      if (mouseX > (width / 2) + 100) {
        // display check
        image(this.icon4, this.icon4X, this.icon4Y);
        if (mouseX > (width / 2) + 200) {
          // switch to chat
          switchScreen(screenThirteen);
        }
      }
      
      // rejecting conditions
      if (mouseX < (width / 2) - 100) {
        // display X
        image(this.icon5, this.icon5X, this.icon5Y);
      }
    } else {
      image(this.icon3, this.icon3X, this.icon3Y, 340, 730);
    }
    
    pop();
    
    image(this.icon2, this.icon2X, this.icon2Y);
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
      switchScreen(screenEleven);
    }
    // select profile
    if (
      mouseX > this.icon3X - this.icon3W / 2 &&
      mouseX < this.icon3X + this.icon3W / 2 &&
      mouseY > this.icon3Y - this.icon3H / 2 &&
      mouseY < this.icon3Y + this.icon3H / 2
    ) {
      this.isPressed = true;
    }
  }
  
// handle screen interaction(s)
  mouseReleased() {
    // unselect profile
    if (
      mouseX > this.icon3X - this.icon3W / 2 &&
      mouseX < this.icon3X + this.icon3W / 2 &&
      mouseY > this.icon3Y - this.icon3H / 2 &&
      mouseY < this.icon3Y + this.icon3H / 2
    ) {
      this.isPressed = false;
    }
  }
}