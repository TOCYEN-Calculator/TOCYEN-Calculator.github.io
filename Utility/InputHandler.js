/**
 * Static class used to provide high-level event functions about
 * key presses.
 * @class
 */
class InputHandler {
  /**
   * Construct the InputHandler. This function should be called during
   * startup before any functions are used.
   */
  static constructor() {
    /**
     * Event called when any key is pressed. Usually reserved for non-ASCII keys.
     */
    this.specialEvent = new Event();
  }

  /**
   * Internal event function called by p5's keyPressed().
   * Called whenever ANY key is pressed, but is usually
   * reserved for non-ASCII keys.
  */
  static SpecialKey() {
    this.specialEvent.Call();
  }
}

function keyPressed() {
  InputHandler.SpecialKey();
}
