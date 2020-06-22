/**
 * A wrapper for the p5.js mouse. Mainly used to determine when the mouse
 * clicks.
 * @class
 */
class Mouse {
  /**
   * Construct the Mouse. This function should be called during
   * startup before any functions are used.
   */
  static constructor() {
    /**
     *  A boolean that is true for a single frame whenever the mouse clicks.
     */
    this.clicked = false;

    /**
     *  A boolean that is true whenever the left mouse button is held down.
     * This is used to determine when the mouse has clicked.
     */
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
