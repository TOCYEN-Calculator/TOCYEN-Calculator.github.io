/**
 * Provides a listener / caller system.
 * @class
 */
class Event {
  constructor() {
    /**
     * An array of callback functions.
     */
    this.listeners = [];
  }

  /**
   * Adds a listener that will be activated if called.
   * @param {function} listener - A function. Any other type will
   * print an error.
   */
  AddListener(listener) {
    if(typeof listener == 'function') {
      this.listeners.push(listener);
    }
    else {
      print(`Event.js: Could not add \"${listener}\" as a listener, as it\'s not a function.`);
    }
  }

  /**
   * Removes all listeners, no fuss.
   */
  RemoveListeners() {
    this.listeners.splice(0, this.listeners.length);
  }

  /**
   * Calls all listeners. Any arguments passed will be passed to listeners.
   */
  Call() {
    for(var index in this.listeners) {
      this.listeners[index](...arguments);
    }
  }
}
