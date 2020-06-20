/**
 * A wrapper for p5.js keys.
 * @class
 */
class InputHandler {
  /**
   * Construct the InputHandler. This function should be called during
   * startup before any functions are used.
   */
  static constructor() {
    /**
     * Event called when a ASCII key is pressed.
     */
    this.keyEvent = new Event();
  }

  /**
   * Function called when a ASCII key is pressed.
   */
  static KeyTyped() {
    this.keyEvent.Call();
  }
}

function keyTyped() {
  InputHandler.KeyTyped();
}
