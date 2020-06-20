/**
 * A wrapper for p5.js keys.
 * @class
 */
class InputHandler {

  static constructor() {
    this.keyEvent = new ListenerSystem();
  }

  static KeyTyped() {
    this.keyEvent.Call();
  }
}

function keyTyped() {
  InputHandler.KeyTyped();
}
