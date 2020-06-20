/**
 * A event with a listener / subcriber system.
 * @class
 */
class Event {
  /**
   * Make a new Event.
   */
  constructor() {
    /**
     * Array of listeners. Listeners should be delegates / lambda functions / functions
     */
    this.listeners = [];
  }

  /**
   * Adds a listener. Will be activated once if called.
   * @param {function} listener - Function that will be called.
   */
  AddListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * Calls all listeners.
   */
  Call() {
    for(var i = 0; i < this.listeners.length; i++) {
      this.listeners[i]();
    }
  }
}
