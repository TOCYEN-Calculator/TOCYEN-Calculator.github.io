/**
 * Helps align elements by giving out relative positions.
 *
 * @class
 */
class Aligner {
  /**
   * Constructs the ALigner. Should be called in setup() before any members or functions are accessed.
   *
   * @static
   */
  static constructor() {
    /**
     * A set of enumerations that represent positions on the canvas.
     * Used in SetReference().
     */
    this.REFERENCE = {
      TOPLEFT : 0,
      TOP : 1,
      TOPRIGHT : 2,
      LEFT : 3,
      CENTER : 4,
      RIGHT : 5,
      BOTTOMLEFT : 6,
      BOTTOM : 7,
      BOTTOMRIGHT: 8
    };

    /**
     * The current reference point. Any relative position will be relative to this.
     * This can be set safely using SetReference().
     */
    this.currentReference = this.REFERENCE.CENTER;


    /**
     * The element other elements can align with. Set using SetLastElement().
     */
    this.lastElement = null;
  }


  /**
   * Sets the last constructed element. Used when aligning other elements.
   *
   * @param {Element} element A class derived from Element.js.
   */
  static SetLastElement(element) {
    // Set the information for the last element.
    this.lastElement = element;
  }


  /**
   * Given an element, return a position that aligns it's center to be at
   * the last known element.
   *
   * @param  {Element} element  A class derived from Element.js.
   * @param  {number}  padding The space between the elements. Can be negative to bring them close.
   * @return {Vector}  A p5 vector representing the absolute position of the aligned position.
   */
  static GetNextPosition(element, padding = 0) {
    var currentPosition = createVector(this.lastElement.rawPosition.x, this.lastElement.rawPosition.y);

    currentPosition.y += this.lastElement.height / 2 + element.height / 2 + Scaler.ScaleByWidth(padding);

    return currentPosition;
  }

  /**
   * Sets the current reference point. This can be a vector or part of
   * the REFERENCE enumeration.
   * @param {REFERENCE | Vector} position - A REFERENCE or Vector that represents a absolute position of the canvas.
   */
  static SetReference(position) {
    this.currentReference = position;
  }

  /**
   * Converts a relative position into an absolute position based on the currentReference point.
   * @param {number} x - x relative position
   * @param {number} y - y relative position
   * @return {Vector} Vector representing a absolute position in the canvas.
   */
  static GetAbsolutePosition(x, y) {
    // Converts a relative point to an absolute point
    var offset = this.GetOffset();
    return createVector(x + offset.x, y + offset.y);
  }

  /**
   * Gets the offset of currentReference from the topleft of the screen.
   * @return {Vector} Vector representing a offset.
   */
  static GetOffset() {
    // Set offset to the center of the screen.
    var offset = createVector(window.innerWidth / 2, window.innerHeight / 2);

    if(typeof this.currentReference === 'number') {
      switch(this.currentReference) {
      case this.REFERENCE.TOP:
        offset.y = 0;
        break;

      case this.REFERENCE.TOPLEFT:
        offset = createVector(0,0);
        break;

      case this.REFERENCE.TOPRIGHT:
        offset = createVector(window.innerWidth, 0);
        break;

      case this.REFERENCE.LEFT:
        offset.x = 0;
        break;

      case this.REFERENCE.RIGHT:
        offset.x = window.innerWidth;
        break;

      case this.REFERENCE.BOTTOMLEFT:
        offset = createVector(0, window.innerHeight);
        break;

      case this.REFERENCE.BOTTOM:
        offset.y = window.innerHeight;
        break;

      case this.REFERENCE.BOTTOMRIGHT:
        offset = createVector(window.innerWidth, window.innerHeight);
        break;
      }
    }

    else {
      print(`Aligner.js: Current reference is not a enumeration (number). Cannot get offset.`);
    }

    return offset;
  }

};
