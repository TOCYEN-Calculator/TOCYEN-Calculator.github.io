/**
 * Base class for UI elements. Wraps around p5 HTML elements.
 *
 * @class
 */
class Element {

  /**
   * Construct an element.
   *
   * @param {p5.Element} pElement - The p5 element representing the HTML element.
   * @param {Vector}     position - The relative position of the element's center on the canvas.
   */
  constructor(pElement, position) {
    /**
     * The raw position of the element. Wrapped with
     * the position() setter and getter.
     */
    this.rawPosition = createVector(0,0);
    this.pElement = pElement;
    this.hidden = false;
    this.height = 0;
    this.width = 0;

    if(position == null) {
      position = createVector(0,0);
    }
    position = Scaler.ScalePosition(position);

    if(typeof position == 'object') {
      this.rawPosition = Aligner.GetAbsolutePosition(position.x, position.y);
    }
    else {
      print("Element.js: Position could not be set.")
    }
    this.RefreshElement();
    this.Hide();
  }


  /**
   * Refreshes the element's width, height, and central position. It's recommended to use this
   * after you change pElement's style, class, ect.
   */
  RefreshElement() {
    this.pElement.show();
    this.width = this.pElement.elt.offsetWidth;
    this.height = this.pElement.elt.offsetHeight;
    this.pElement.position(0, 0);
    this.pElement.position(this.position.x - this.width / 2, this.position.y - this.height / 2);

    if(this.hidden) {
      this.Hide();
    }
  }

  Show() {
    this.hidden = false;
    this.pElement.show();
  }

  Hide() {
    this.hidden = true;
    this.pElement.hide();
  }

  AlignWithLast(padding = 0) {
    this.rawPosition = Aligner.GetNextPosition(this, padding);
    this.RefreshElement();
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
      this.RefreshElement();
    }
    else {
      print(`TextElement.js: Could not set position as \"${val}\".`);
    }
  }
}
