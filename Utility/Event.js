/**
 * Provides a listener / caller system.
 * @class
 */
class Event {
  constructor() {
    // An array of listeners. Listeners should be functions.
    this.listeners = [];
  }

  /**
   * Adds a listener that will be activated if called.
   * @param {function} listener - A function. Any other type will
   * rise an error.
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
   * Removes all listeners, no fuss.
   */
  RemoveListeners() {
    this.listeners.splice(0, this.listeners.length);
  }

  /**
   * Calls all listeners. Arguments passed will be passed to listeners.
   */
  Call() {
    for(var index in this.listeners) {
      this.listeners[index](...arguments);
    }
  }
}
