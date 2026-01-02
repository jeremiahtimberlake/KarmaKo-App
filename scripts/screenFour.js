// SCREEN 4

// DEV NOTES:
// add correct font to div text

class ScreenFour {
  constructor() {
    // text
    this.text1 = 'thank you! here is the list \nof things you agreed to:';
    this.text2 = 'next';
    
    // text scroll
    this.textScroll = createDiv('by pressing “agree” you have allowed <i>GrindHr</i> the access to the following: <br><br>•  your contacts in your phone, laptop, work devices, and other devices you may have in your possession. <br>•  your social media accounts, deleted and active, through GrindHr Corporation ULTD and any other social media. companies you may be in contact with. <br>•  your location, including but not limited to, device location, personal location, <br>•  your cameras located on your phone, laptop, tablets, and any other devices you may have accessed in the past decade, along with security footage you have appeared in in the last five years. <br>•  your microphones located in your phone, laptop, tablets, and any other devices you may have accessed in the past decade, along with security audio you have appeared in in the last five years. <br>•  your past actions, captured by KarmaKo, in relation to your KarmaMeter, which tracks all past and current actions to formulate a comprehensive score to determine your KarmaScore. <br>•  your past online interactions to be analyzed and interpreted in any way, shape, and form by KarmaKo and GrindHr Corporation ULTD with or without explicit consent financial information from banking apps you may have on your phone, or any devices you may have logged into, past and current, along with agreement from your banking company to allow GrindHR Corporation ULTD to have full access to your banking information and routing numbers. <br>•  your social security number (SSN), phone number, email address, insurance number, and other personal documentation GrindHr Corporation ULTD may require. No action is needed at this time, for GrindHr already has access through your device and previous website activity. <br>•  any biometric data related to you and family members through, and not limited to, MyChart, regular doctors visits, hospital stays, urgent care visits, and more. <br>•  permission to visually alter any preexisting photos, audio clips, or other digital media resembling your likeness. <br>•  no accountability for any actions you may take while subscribed to this application, now or otherwise');   
    this.textScroll.hide();
    this.textScroll.style('overflow-y', 'scroll');
    this.textScroll.style('background', 'white');
    this.textScroll.style('padding', '15px');
    this.textScroll.style('border', '2px solid black');
    this.textScroll.style('border-radius', '8px');
    this.textScroll.style('font-family', 'sans-serif');
    this.textScroll.style('line-height', '1.6em');
    
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
    background(38, 38, 38, 45);
    textAlign(CENTER);
    imageMode(CENTER);
    
    image(this.icon1, this.icon1X, this.icon1Y);
    
    this.textScroll.position(45, 221);
    this.textScroll.size(276, 434);
    
    fill('white');
    textSize(30)
    textStyle(NORMAL);
    text(this.text1, width / 2, 140);
    
    image(this.rec, this.recX, this.recY);
    
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
      text(this.text2, width / 2, height - 80);
    } else {
      fill('white');
      textSize(34);
      textStyle(ITALIC);
      textAlign(CENTER);
      text(this.text2, width / 2, height - 80);
    }
    
    image(this.icon3, this.icon3X, this.icon3Y);
  }
  
  show() {
    this.textScroll.show();
  }

  hide() {
    this.textScroll.hide();
  }
  
  // handle screen switches
  mousePressed() {
    // switch to next screen
    if (
      mouseX > this.icon2X - this.icon2W / 2 &&
      mouseX < this.icon2X + this.icon2W / 2 &&
      mouseY > this.icon2Y - this.icon2H / 2 &&
      mouseY < this.icon2Y + this.icon1H / 2
    ) {
      switchScreen(screenFive);
    }
    // switch to previous screen
    if (
      mouseX > this.icon3X - this.icon3W / 2 &&
      mouseX < this.icon3X + this.icon3W / 2 &&
      mouseY > this.icon3Y - this.icon3H / 2 &&
      mouseY < this.icon3Y + this.icon3H / 2
    ) {
      switchScreen(screenThree);
    }
  }
}
