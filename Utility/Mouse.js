/**
 * A static class with high-level functions and variables about the mouse.
 * @class
 */
class Mouse {
  /**
   * Should be called on setup() before any functions or variables
   * are accessed.
   */
  static constructor() {
    /**
     *  A boolean used to signal when the mouse has been clicked. Will
     * be true for one frame.
     */
    this.clicked = false;

    // Interal variable used to determine when the mouse is pressed.
    this.pressed = false;
  }

  static Update() {
    // Determine when the mouse has been clicked.
    // this.clicked should be true for only 1 frame.
    this.clicked = mouseIsPressed && !this.pressed;
    this.pressed = mouseIsPressed;
  }
}
