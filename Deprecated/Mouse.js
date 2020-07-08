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
     * be true for one frame, and can be safely accessed by its getter, clicked().
     */
    this.rawClicked = false;

    // Interal variable used to determine when the mouse is pressed.
    this.pressed = false;
  }

  static get clicked() {
    return this.rawClicked;
  }

  static Update() {
    // Determine when the mouse has been clicked.
    // this.clicked should be true for only 1 frame.
    this.rawClicked = mouseIsPressed && !this.pressed;
    this.pressed = mouseIsPressed;
  }
}
