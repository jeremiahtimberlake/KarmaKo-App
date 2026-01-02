// SCREEN 1

class ScreenOne {
  constructor() {
    // text
    this.text1 = 'hi, come on \nin!';
    this.text2 = "let's begin";
    
    // icon(s)
    this.icon1 = loadImage('assets/karmako_logo_1.png', img => {
      this.icon1W = img.width;
      this.icon1H = img.height;
    });
    this.icon1X = width / 2;
    this.icon1Y = (height / 2) - 200;
    
    this.icon2 = loadImage('assets/main_button.png', img => {
      this.icon2W = img.width;
      this.icon2H = img.height;
    });
    this.icon2X = width / 2;
    this.icon2Y = height - 90;
    
    // gradient border colors
    this.firstColor = color(255, 0 ,94);
    this.secondColor = color(252, 179, 22);
  }

  // display screen
  display() {
    // create black background w/gradient borders
    for (let y = 0; y < height; y++) {
      this.n = map(y, 0, height, 0, 1);
      this.newColor = lerpColor(this.firstColor, this.secondColor, this.n);
      stroke(this.newColor);
      line(0, y, width, y);
    }
    drawingContext.filter = "blur(15px)";
    noStroke();
    fill(38, 38, 38)
    rect(10, 10, 380, 830, 50);
    drawingContext.filter = "none";
    
    textAlign(CENTER);
    imageMode(CENTER);
    
    image(this.icon1, this.icon1X, this.icon1Y);
    
    fill('white');
    textSize(36);
    textStyle(NORMAL);
    text(this.text1, width / 2, (height / 2) - 60);
    
    image(this.icon2, this.icon2X, this.icon2Y);
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon2H / 2
    ) {
      fill('white');
      textSize(36);
      text(this.text2, width / 2, height - 80);
    } else {
      fill('white');
      textSize(34);
      text(this.text2, width / 2, height - 80);
    }
  }

  // handle screen switches
  mousePressed() {
    // switch to the next screen
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon2H / 2
    ) {
      switchScreen(screenTwo);
    }
  }
}
