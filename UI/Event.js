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
   * Adds a listener that will be activated once if called.
   * @param {function} listener - Function that will be called. Will print out
   * an error if it isn't a function.
   */
  AddListener(listener) {
    if(typeof listener == 'function') {
      this.listeners.push(listener);
    }
    else {
      print(`Event.js: Could not add \"${listener}\" using AddListener`);
    }
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
    for(var index in this.listeners) {
      this.listeners[index]();
    }
  }
}
