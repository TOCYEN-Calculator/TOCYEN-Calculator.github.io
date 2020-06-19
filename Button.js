/*
 * Button.js
 *
 * Provides a custom clickable button.
*/
class Button {
  constructor(strText, x, y) {
    this.text = strText;
    this.textSize = textSize();
    this.position = Aligner.GetAbsolutePosition(x,y);

    this.hitbox = {
      x: this.position.x - (textWidth(strText) / 2),
      y: this.position.y - (this.textSize / 2),
      w: textWidth(strText),
      h: this.textSize
    };

    this.listeners = [];
  }

  MouseIsHovering() {
    return (mouseX >= this.hitbox.x && mouseX <= this.hitbox.x + this.hitbox.w &&
       mouseY >= this.hitbox.y && mouseY <= this.hitbox.y + this.hitbox.h);
  }

  Render() {
    textSize(this.textSize);

    if(this.MouseIsHovering()) {
         fill(200);
    }

    text(this.text, this.position.x, this.position.y);
    ResetFillColor();
  }

  AddListener(listener) {
    this.listeners.push(listener);
  }


}
