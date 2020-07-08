/**
 * Helps align elements by giving out relative positions.
 *
 * @class
 */
class Aligner {
  /**
   * Constructs the Aligner. Should be called in setup() before any members or functions are accessed.
   *
   * @static
   */
  static constructor() {
    /**
     * A dictionary of enumerations that represent vector positions on the canvas.
     * Used in SetReference(). With the exception of CENTER, enumerations
     * are listed in the following fashion: {TOP | BOTTOM}{LEFT | RIGHT}.
     */
    this.REFERENCE = {
      TOPLEFT :     createVector(0,                       0),
      TOP :         createVector(window.innerWidth / 2,   0),
      TOPRIGHT :    createVector(window.innerWidth,       0),
      LEFT :        createVector(0,                       window.innerHeight / 2),
      CENTER :      createVector(window.innerWidth / 2,   window.innerHeight / 2),
      RIGHT :       createVector(window.innerWidth,       window.innerHeight / 2),
      BOTTOMLEFT :  createVector(0,                       window.innerHeight),
      BOTTOM :      createVector(window.innerWidth / 2,   window.innerHeight),
      BOTTOMRIGHT:  createVector(window.innerWidth,       window.innerHeight)
    };

    /**
     * The current reference point, represented as a vector. Any relative position will be relative to this.
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
   * Sets the current reference point. This has to be a vector. Predefined screen positions
   * are in the REFERENCE dictionary.
   * @param {Vector} position - A vector that represents a absolute position of the canvas.
   */
  static SetReference(position) {
    if(position == null || typeof position != 'object') {
      print(`Aligner.js: Could not set ${position} as the reference point as it\'s not a vector.`);
    }
    else {
      this.currentReference = position;
    }
  }

  /**
   * Converts a relative position into an absolute position based on the currentReference point.
   * @param {Vector}  position - Vector representing a relative position.
   * @return {Vector} Vector representing an absolute position in the canvas.
   */
  static GetAbsolutePosition(position) {
    // Converts a relative point to an absolute point
    var offset = this.currentReference;
    return p5.Vector.add(position, offset);
  }

};
