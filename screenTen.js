// SCREEN 10

class ScreenTen {
  constructor() {
    // text
    this.textOffset = 45;
    this.text1 = 'swiping'
    this.text2 = 'the way you swipe \naffects your \nKarmaMeter score \n\nmake sure you’re \nintentional about \nyour actions'
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
    
    this.icon4 = loadImage('assets/g_hand.png', img => {
      this.icon4W = img.width;
      this.icon4H = img.height;
    });
    this.icon4X = width / 2;
    this.icon4Y = height - 300;
    
    this.icon5 = loadImage('assets/g_arrow_1.png', img => {
      this.icon5W = img.width;
      this.icon5H = img.height;
    });
    this.icon5X = (width / 2) - 130;
    this.icon5Y = height - 300;
    
    this.icon6 = loadImage('assets/g_arrow_2.png', img => {
      this.icon6W = img.width;
      this.icon6H = img.height;
    });
    this.icon6X = (width / 2) + 130;
    this.icon6Y = height - 300;
    
    // gradient background colors
    this.firstColor =  color(252, 179, 22, 48);
    this.secondColor = color(255, 0 ,94, 48);
  }
  
  // display screen
  display() {
    // create a dim gradient background
    let dimFactor = map(mouseX, 0, width, 0.3, 0.7);

    for (let x = 0; x < width; x++) {
      let n = map(x, 0, width, 0, 1);
      let c = lerpColor(this.firstColor, this.secondColor, n);

      let r = red(c) * dimFactor;
      let g = green(c) * dimFactor;
      let b = blue(c) * dimFactor;

      stroke(color(r, g, b));
      line(x, 0, x, height);
    }
    textAlign(CENTER);
    imageMode(CENTER);
    
    fill('white');
    textSize(34)
    textStyle(BOLD);
    text(this.text1, width / 2, 130);
    
    fill('white');
    textSize(26)
    textStyle(NORMAL);
    text(this.text2, width / 2, 230);
    
    image(this.icon1, this.icon1X, this.icon1Y);
    image(this.icon2, this.icon2X, this.icon2Y);
    fill(38, 38, 38);
    noStroke();
    rect(0, 775, 400, 75)
    image(this.icon3, this.icon3X, this.icon3Y);
    
    image(this.icon4, mouseX, this.icon4Y);
    image(this.icon5, this.icon5X, this.icon5Y);
    image(this.icon6, this.icon6X, this.icon6Y);
    
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
      switchScreen(screenEleven);
    }
    // switch to previous screen
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon2H / 2
    ) {
      switchScreen(screenNine);
    }
  }
}
