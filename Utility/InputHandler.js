/**
 * A wrapper for p5.js keys. Contains events called on key presses.
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

    /**
     * Event called when any key is pressed. Usually reserved for non-ASCII keys.
     */
    this.specialEvent = new Event();
  }

  /**
   * Function called when a ASCII key is pressed.
   */
  static KeyTyped() {
    this.keyEvent.Call();
  }

  /**
   * Function called when a non-ASCII key is pressed.
   */
  static SpecialKey() {
    this.specialEvent.Call();
  }
}

function keyTyped() {
  InputHandler.KeyTyped();
}

function keyPressed() {
  InputHandler.SpecialKey();
}
