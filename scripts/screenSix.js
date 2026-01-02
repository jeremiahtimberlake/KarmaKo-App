// SCREEN 6

class ScreenSix {  
  constructor() {
    // text
    this.text1 = 'how would \nyou like to \nuse the app?';
    
    // icon(s)
    this.icon1 = loadImage('assets/karmako_logo_2.png', img => {
      this.icon1W = img.width;
      this.icon1H = img.height;
    });
    this.icon1X = width / 2;
    this.icon1Y = 65;
    
    this.icon2 = loadImage('assets/arrow_back.png', img => {
      this.icon2W = img.width;
      this.icon2H = img.height;
    });
    this.icon2X = 30;
    this.icon2Y = 30;
    
    this.icon3 = loadImage('assets/feature_1.png', img => {
      this.icon3W = img.width;
      this.icon3H = img.height;
    });
    this.icon3X = (width / 2) - 90;
    this.icon3Y = (height / 2) + 10;
    
    this.icon4 = loadImage('assets/feature_2.png', img => {
      this.icon4W = img.width;
      this.icon4H = img.height;
    });
    this.icon4X = (width / 2) + 90;
    this.icon4Y = (height / 2) + 10;
    
    this.icon5 = loadImage('assets/feature_3.png', img => {
      this.icon5W = img.width;
      this.icon5H = img.height;
    });
    this.icon5X = (width / 2) - 90;
    this.icon5Y = (height / 2) + 210;
    
    this.icon6 = loadImage('assets/feature_4.png', img => {
      this.icon6W = img.width;
      this.icon6H = img.height;
    });
    this.icon6X = (width / 2) + 90;
    this.icon6Y = (height / 2) + 210;
    
    // feature booleans
    this.isJobs = false;
    this.isFriends = false;
    this.isRoommates = false;
  }

  // display screen
  display() {
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 'transparent';
    drawingContext.filter = 'none';
    
    background(38, 38, 38, 45);
    textAlign(CENTER);
    imageMode(CENTER);
    
    image(this.icon1, this.icon1X, this.icon1Y);
    
    fill('white');
    textSize(34)
    textStyle(NORMAL);
    text(this.text1, width / 2, 185);
    
    image(this.icon2, this.icon2X, this.icon2Y);
    
    image(this.icon3, this.icon3X, this.icon3Y);
    image(this.icon4, this.icon4X, this.icon4Y);
    image(this.icon5, this.icon5X, this.icon5Y);
    image(this.icon6, this.icon6X, this.icon6Y);
    
    if (
      mouseX > this.icon3X - this.icon3W / 2 &&
      mouseX < this.icon3X + this.icon3W / 2 &&
      mouseY > this.icon3Y - this.icon3H / 2 &&
      mouseY < this.icon3Y + this.icon3H / 2
    ) {
      fill('white');
      textSize(18);
      text("romance & sex", this.icon3X, this.icon3Y + 100);
    } else {
      textSize(16);
      text("romance & sex", this.icon3X, this.icon3Y + 100);
    } 
    if (
      mouseX > this.icon4X - this.icon4W / 2 &&
      mouseX < this.icon4X + this.icon4W / 2 &&
      mouseY > this.icon4Y - this.icon4H / 2 &&
      mouseY < this.icon4Y + this.icon4H / 2
    ) {
      fill('white');
      textSize(18);
      text("jobs", this.icon4X, this.icon4Y + 100);
    } else {
      fill('white');
      textSize(16);
      text("jobs", this.icon4X, this.icon4Y + 100);
    }
    if (
      mouseX > this.icon5X - this.icon5W / 2 &&
      mouseX < this.icon5X + this.icon5W / 2 &&
      mouseY > this.icon5Y - this.icon5H / 2 &&
      mouseY < this.icon5Y + this.icon5H / 2
    ) {
      fill('white');
      textSize(18);
      text("friends", this.icon5X, this.icon5Y + 100);
    } else {
      fill('white');
      textSize(16);
      text("friends", this.icon5X, this.icon5Y + 100);
    }
    if (
      mouseX > this.icon6X - this.icon6W / 2 &&
      mouseX < this.icon6X + this.icon6W / 2 &&
      mouseY > this.icon6Y - this.icon6H / 2 &&
      mouseY < this.icon6Y + this.icon6H / 2
    ) {
      fill('white');
      textSize(18);
      text("roommates", this.icon6X, this.icon6Y + 100);
    } else {
      fill('white');
      textSize(16);
      text("roommates", this.icon6X, this.icon6Y + 100);
    }
    
    if (this.isJobs == true) {
      fill('white');
      textSize(16)
      textStyle(NORMAL);
      text("sorry! \nour jobs feature \nis currently unavailable.", width / 2, height - 75)
    } else if (this.isFriends == true) {
      fill('white');
      textSize(16)
      textStyle(NORMAL);
      text("sorry! \nour friends feature \nis currently unavailable.", width / 2, height - 75)
    } else if (this.isRoommates) {
      fill('white');
      textSize(16)
      textStyle(NORMAL);
      text("sorry! \nour roommates feature \nis currently unavailable.", width / 2, height - 75)
    }
  }
  
  // handle screen switches and feature selections
  mousePressed() {
    // switch to previous screen
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon2H / 2
    ) {
      switchScreen(screenFive);
    }
    // switch to next screen
    if (
      mouseX > this.icon3X - this.icon3W / 2 &&
      mouseX < this.icon3X + this.icon3W / 2 &&
      mouseY > this.icon3Y - this.icon3H / 2 &&
      mouseY < this.icon3Y + this.icon3H / 2
    ) {
      this.isJobs = false;
      this.isFriends = false;
      this.isRoommates = false;
      switchScreen(screenSeven);
    }
    // switch to "networking" feature 
    if (
      mouseX > this.icon4X - this.icon4W / 2 &&
      mouseX < this.icon4X + this.icon4W / 2 &&
      mouseY > this.icon4Y - this.icon4H / 2 &&
      mouseY < this.icon4Y + this.icon4H / 2
    ) {
      this.isJobs = true;
      this.isFriends = false;
      this.isRoommates = false;
    }
    // switch to "friends" feature 
    if (
      mouseX > this.icon5X - this.icon5W / 2 &&
      mouseX < this.icon5X + this.icon5W / 2 &&
      mouseY > this.icon5Y - this.icon5H / 2 &&
      mouseY < this.icon5Y + this.icon5H / 2
    ) {
      this.isFriends = true;
      this.isJobs = false;
      this.isRoommates = false;
    }
    // switch to "roommates" feature
    if (
      mouseX > this.icon6X - this.icon6W / 2 &&
      mouseX < this.icon6X + this.icon6W / 2 &&
      mouseY > this.icon6Y - this.icon6H / 2 &&
      mouseY < this.icon6Y + this.icon6H / 2
    ) {
      this.isRoommates = true;
      this.isJobs = false;
      this.isFriends = false;
    }
  }
}
