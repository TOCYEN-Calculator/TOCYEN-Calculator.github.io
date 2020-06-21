/**
 * A event with a listener / subcriber system.
 * @class
 */
class Event {
  /**
   * Makes a new Event.
   */
  constructor() {
    /**
     * An array of listeners. Listeners should be delegates / lambda functions / functions.
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
   * Unsubscribes all listeners.
   */
  RemoveListeners() {
    this.listeners.splice(0, this.listeners.length);
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
