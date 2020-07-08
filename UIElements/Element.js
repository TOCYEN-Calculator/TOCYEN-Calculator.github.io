/**
 * Base class for UI elements. Wraps around p5 HTML elements.
 *
 * @class
 */
class Element {

  /**
   * Construct an element. The element will be automatically hid until shown by Show().
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

    /**
     * The p5.Element of the class. Feel free to use this in a derived class to set
     * custom attributes.
     */
    this.pElement = pElement;

    /**
     * Whether or not the HTML element is in view. Changes with SetActive().
     */
    this.active = false;

    /**
     * Height of the element. Takes into account padding, margin, and more.
     */
    this.height = 0;


    /**
     * Width of the element. Takes into account padding, margin, and more.
     */
    this.width = 0;

    if(typeof position != 'object') {
      position = createVector(0,0);
    }
    position = Scaler.ScalePosition(position);
    this.rawPosition = Aligner.GetAbsolutePosition(position);

    this.RefreshElement();
    this.SetActive(false);
  }


  /**
   * Refreshes the element's width, height, and central position. It's recommended to use this
   * after you change pElement's style, class, ect.
   */
  RefreshElement() {
    this.pElement.show();
    this.width = this.pElement.elt.offsetWidth;
    this.height = this.pElement.elt.offsetHeight;
    this.pElement.position(this.position.x - this.width / 2, this.position.y - this.height / 2);

    this.SetActive(this.active);
  }


  /**
   * Changes whether or not the element is in view.
   *
   * @param {bool} active Whether or not the element is active / in view.
   */
  SetActive(active) {
    this.active = active;
    if(active) {
      this.pElement.show();
    }
    else {
      this.pElement.hide();
    }
  }


  /**
   * Aligns this element's y value to be beneath the Aligner's last element.
   * This automatically refreshes the element.
   *
   * @param {Number} padding - The space between the elements. Can be negative
   * to bring them closer together.
   */
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
   * and shows debugging information. This automatically refreshes the element.
   *
   * @param {Vector} val - The value trying to be set. Hopefully it's a Vector!
   */
  set position(val) {
    if(typeof val == 'object') {
      this.rawPosition = Aligner.GetAbsolutePosition(val);
      this.RefreshElement();
    }
    else {
      print(`TextElement.js: Could not set position as \"${val}\".`);
    }
  }
}
