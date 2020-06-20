
/**
 * A button comprised entirely of text.
 * @class
 */
class Button {
  /**
   * Create a button. Automatically saves the last textSize() and Align.currentReference. This
   * also automatically calls Aligner.SetLastText().
   * @param {string} strText - The text shown on the button.
   * @param {Vector} position - Vector representing the relative position of the button. Can be omitted to automatically use Aligner.GetNextPosition().
   */
  constructor(strText, position) {

    /**
     * The text shown on the button, stored here as a string. Cannot be changed.
     */
    this.text = strText;

    /**
     * The text size saved during the creation of the button.
     * This information will be used to display the button correctly,
     * even if textSize() externally changes.
     */
    this.textSize = textSize();

    /**
     * The absolute position of the center of button. This can be set using
     * the "position" parameter, or be left not to automatically use
     * Aligner.GetNextPosition().
     */
    this.position = createVector(0,0);

    if(arguments.length == 1) {
      this.position = Aligner.GetNextPosition();
    }
    else {
      this.position = Aligner.GetAbsolutePosition(position.x, position.y);
    }

    Aligner.SetLastText(strText, this.position.x, this.position.y);

    /**
     * The hitbox of the text. Contains a absolute x, y, width, and height values
     * to be used fot hit detection.
     */
    this.hitbox = {
      x: this.position.x - (textWidth(strText) / 2),
      y: this.position.y - (this.textSize / 2),
      w: textWidth(strText),
      h: this.textSize
    };

    /**
     * An event called once if the button is pressed.
     */
    this.onClick = new Event();
  }


  /**
   * Returns a bool representing if the mouse is hovering on the button's hitbox.
   * @return {bool} True if mouse if hovering over the button.
   */
  MouseIsHovering() {
    return (mouseX >= this.hitbox.x && mouseX <= this.hitbox.x + this.hitbox.w &&
       mouseY >= this.hitbox.y && mouseY <= this.hitbox.y + this.hitbox.h);
  }


  /**
   * Renders the text of the button, and updates it. Hovering over the button causes
   * a slight change in color.
   */
  Render() {
    textSize(this.textSize);

    if(this.MouseIsHovering()) {
         fill(200);

         if(Mouse.clicked) {
           fill(100);
           this.onClick.Call();
         }
    }

    text(this.text, this.position.x, this.position.y);
    ResetFillColor();
  }


}
