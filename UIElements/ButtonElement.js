
/**
 * A button comprised entirely of text. Derives from TextElement.
 * @class
 */
class ButtonElement extends TextElement {
  /**
   * Create a button element.
   * @param {string} text - The text shown.
   * @param {Vector | None | Number} position -
   * VECTOR: The relative position of the element's center on the canvas.
   * NONE: Automatically Aligner.GetNextPosition().
   * Number: The padding of Aligner.GetNextPosition().
   */
  constructor(strText, position) {
    super(strText, position);

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
    if(this.MouseIsHovering()) {
         fill(200);

         if(Mouse.clicked) {
           fill(100);
           this.onClick.Call();
         }
    }

    this.RenderText();
    ResetFillColor();
  }


}
