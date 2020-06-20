/**
 * A listener / subcriber system.
 * @class
 */
class ListenerSystem {
  constructor() {
    this.listener = [];
  }

  /**
   * Adds a listener. Will be activated once if called.
   * @param {function} listener - Function that will be called.
   */
  AddListener(listener) {
    this.listener.push(listener);
  }

  Call() {
    for(var i = 0; i < this.listener.length; i++) {
      this.listener[i]();
    }
  }
}
