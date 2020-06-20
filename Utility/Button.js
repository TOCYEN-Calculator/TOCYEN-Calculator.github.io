
/**
 * A button comprised entirely of text.
 * @class
 */
class Button {
  /**
   * Create a button. Automatically saves the last textSize() and ALign.currentReference.
   * @param {string} strText - The text shown on the button.
   * @param {Vector} position - Vector representing the relative position of the button. Can be omitted to automatically use Aligner.GetNextPosition().
   */
  constructor(strText, position) {
    this.text = strText;

    // Save text settings
    this.textSize = textSize();

    if(arguments.length == 1) {
      this.position = Aligner.GetNextPosition();
    }
    else {
      this.position = Aligner.GetAbsolutePosition(position.x, position.y);
    }

    this.pressed = false;
    Aligner.SetLastText(strText, this.position.x, this.position.y);

    // Make a hitbox surrounding the text.
    this.hitbox = {
      x: this.position.x - (textWidth(strText) / 2),
      y: this.position.y - (this.textSize / 2),
      w: textWidth(strText),
      h: this.textSize
    };

    // Array of listeners; Functions / Lambda Functions / Delegates
    this.listeners = [];
  }


  /**
   * Returns a bool representing if the mouse is hovering on the button.
   * @return {bool} True if mouse if hovering over the button.
   */
  MouseIsHovering() {
    return (mouseX >= this.hitbox.x && mouseX <= this.hitbox.x + this.hitbox.w &&
       mouseY >= this.hitbox.y && mouseY <= this.hitbox.y + this.hitbox.h);
  }


  /**
   * Renders / updates the button.
   */
  Render() {
    textSize(this.textSize);

    if(this.MouseIsHovering()) {
         fill(200);

         if(mouseIsPressed && !this.pressed) {
           fill(100);
           for(var i = 0; i < this.listeners.length; i++) {
             this.listeners[i]();
           }
         }
    }
    this.pressed = mouseIsPressed;

    text(this.text, this.position.x, this.position.y);
    ResetFillColor();
  }

  /**
   * Adds a listener. Will be activated once if the button is pressed.
   * @param {function} listener - Function that will be called when clicked.
   */
  AddListener(listener) {
    this.listeners.push(listener);
  }


}
