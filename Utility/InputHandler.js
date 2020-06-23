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
     * Event called when a ASCII key is pressed.
     */
    this.keyEvent = new Event();

    /**
     * Event called when any key is pressed. Usually reserved for non-ASCII keys.
     */
    this.specialEvent = new Event();
  }

  // Internal event function called by p5's keyTyped().
  // Only called on ASCII keys.
  static KeyTyped() {
    this.keyEvent.Call();
  }

  // Internal event function called by p5's keyPressed().
  // Called whenever ANY key is pressed, but is usually
  // reserved for non-ASCII keys.
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
