/**
 * Helps align text by giving out relative positions.
 * @class
 */
class Aligner {
  /**
   * Construct the Aligner. This function should be called during
   * startup before any functions are used.
   */
  static constructor() {
    /**
     * A set of enumerations that represent positions on the canvas.
     * Only used in SetReference().
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
     * Information about the last text. Can only be set using SetLastText().
     */
    this.lastText = {
      strText: "",
      textSize: 0,
      position: createVector(0,0)
    };
  }

  /**
   * Sets the information of the last made text. This information will be
   * used to determine GetNextPosition().
   * @param {string} strText - A string representing the text.
   * @param {number} x - x absolute position of the text.
   * @param {number} y - y absolute position of the text.
   */
  static SetLastText(strText, x, y) {
    // Set the information for the last text.
    this.lastText.strText = strText;
    this.lastText.textSize = textSize();
    this.lastText.position = createVector(x, y);
  }

  /**
   * Returns the absolute position of the text below the last text. The last text's
   * content, size, and position can be set using SetLastText().
   * @return {Vector} A vector representing the absolute position of the next position.
   */
  static GetNextPosition() {
    var currentSize = textSize();
    var currentPosition = this.lastText.position;

    currentPosition.y += this.lastText.textSize / 2 + currentSize / 2;

    return currentPosition;
  }

  /**
   * Checks whether or not currentReference is an object or null.
   * @return {bool} Whether or not currentReference is a object or null.
   */
  static ReferenceIsObject() {
    return this.currentReference === null || typeof this.currentReference === 'object';
  }

  /**
   * Sets the current reference point. This can be a vector or part of
   * the REFERENCE enumeration.
   * @param {REFERENCE | Vector} position - A REFERENCE or Vector that represents a absolute position of the canvas.
   */
  static SetReference(position) {
    // Can be a vector or enumeration.
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
   * Converts an absolute position into a relative position based on the currentReference point.
   * @param {number} x - x absolute position
   * @param {number} y - y absolute position
   * @return {Vector} Vector representing a relative position in the canvas.
   */
  static GetRelativePosition(x, y) {
    // Converts an absolute position into a relative position
    var offset = this.GetOffset();
    return createVector(x - offset.x, y - offset.y);
  }


  /**
   * Gets the offset of currentReference from the topleft of the screen.
   * @return {Vector} Vector representing a offset.
   */
  static GetOffset() {
    // Gets the offset.
    var offset = createVector(0,0);
    if(this.ReferenceIsObject()) {
      offset = this.currentReference;
    }
    else {
      offset = this.GetEnumOffset();
    }

    return offset;
  }

  /**
   * Internal function used to determine the offset if currentReference is part of REFERENCE.
   * @return {Vector} Vector representing a offset.
   */
  static GetEnumOffset() {
    // Set offset to the center of the screen.
    var offset = createVector(width / 2, height / 2);

    // Check if current reference is an enumeration.
    if(this.ReferenceIsObject()) {
      print("Aligner.js: Relative position isn't a enumeration.");
    }

    else if(typeof this.currentReference === 'number') {
      switch(this.currentReference) {
      case this.REFERENCE.TOP:
        offset.y = 0;
        break;

      case this.REFERENCE.TOPLEFT:
        offset = createVector(0,0);
        break;

      case this.REFERENCE.TOPRIGHT:
        offset = createVector(width, 0);
        break;

      case this.REFERENCE.LEFT:
        offset.x = 0;
        break;

      case this.REFERENCE.RIGHT:
        offset.x = width;
        break;

      case this.REFERENCE.BOTTOMLEFT:
        offset = createVector(0, height);
        break;

      case this.REFERENCE.BOTTOM:
        offset.y = height;
        break;

      case this.REFERENCE.BOTTOMRIGHT:
        offset = createVector(width, height);
        break;
      }
    }

    return offset;
  }

};
