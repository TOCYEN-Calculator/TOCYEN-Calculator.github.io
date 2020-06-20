/**
 * A wrapper of the p5.js mouse.
 * @class
 */
class Mouse {
  /**
   * Construct the Mouse. This function should be called during
   * startup before any functions are used.
   */
  static constructor() {
    this.clicked = false;
    this.pressed = false;
  }

  /**
   * Updates the mouse values. Should be called before update code.
   */
  static Update() {
    if(mouseIsPressed && this.pressed) {
      this.clicked = false;
    }
    if(mouseIsPressed && !this.pressed) {
      this.clicked = true;
    }
    this.pressed = mouseIsPressed;
  }
}
