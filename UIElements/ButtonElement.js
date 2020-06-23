
/**
 * A button comprised entirely of text.
 * @class
 */
class ButtonElement {
  /**
   * Create a button element. Uses TextElement() to save the current textSize and alignment.
   * @param {string} strText - The text shown on the button.
   * @param {Vector} position - Vector representing the relative position of the button.
   * @param {None}   position - Automatically Aligner.GetNextPosition().
   * @param {Number} position - The padding of Aligner.GetNextPosition().
   */
  constructor(strText, position) {

    /**
     * TextElement(strText, position) of the button.
     */
    this.textElement = new TextElement(strText, position);

    /**
     * The hitbox of the text. Contains a absolute x, y, width, and height values
     * to be used fot hit detection.
     */
    this.hitbox = {
      x: this.textElement.position.x - (textWidth(strText) / 2),
      y: this.textElement.position.y - (this.textElement.textSize / 2),
      w: textWidth(strText),
      h: this.textElement.textSize
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
    if(this.MouseIsHovering()) {
         fill(200);

         if(Mouse.clicked) {
           fill(100);
           this.onClick.Call();
         }
    }

    this.textElement.Render();
    ResetFillColor();
  }


}
