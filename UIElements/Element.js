
/**
 * Base class for UI elements.
 *
 * @class
 */
class Element {

  /**
   * Construct an element.
   *
   * @param {Vector | None | Number} position -
   * VECTOR: The relative position of the element's center on the canvas.
   * NONE: Automatically Aligner.GetNextPosition().
   * Number: The padding of Aligner.GetNextPosition().
   * Any position set will be scaled to match the initial screen size via
   * Scaler.ScalePosition.
   */
  constructor(position) {
    /**
     * The raw position of the element. Wrapped with
     * the position() setter and getter.
     */
    this.rawPosition = createVector(0,0);

    position = Scaler.ScalePosition(position);

    // Set the position of the text based on the arguments given.
    if(typeof position == 'number') {
      this.rawPosition = Aligner.GetNextPosition(position);
    }
    else if(typeof position == 'object') {
      this.rawPosition = Aligner.GetAbsolutePosition(position.x, position.y);
    }
    else {
      print("TextElement.js: Position could not be set.")
    }
  }


  /**
   * Renders the element. By default, renders nothing.
   */
  Render() {

  }

  /**
   * Getter for the element's absolute position.
   *
   * @return {Vector} The absolute position of the element, shown as vector.
   */
  get position() {
    return this.rawPosition;
  }

  /**
   * Setter for the text's relative position. Safely sets the value of the position and screen
   * and shows debugging information.
   *
   * @param {Vector} val - The value trying to be set. Hopefully it's a Vector!
   */
  set position(val) {
    if(typeof val == 'object') {
      this.rawPosition = Aligner.GetAbsolutePosition(val.x, val.y);
    }
    else {
      print(`TextElement.js: Could not set position as \"${val}\".`);
    }
  }
}
