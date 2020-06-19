/*
 * Aligner.js
 *
 * Provides a position relative to a point in space.
*/

class Aligner {

  static constructor() {
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
    this.currentReference = this.REFERENCE.CENTER;
  }

  static ReferenceIsObject() {
    return this.currentReference === null || typeof this.currentReference === 'object';
  }

  static SetReference(enumPosition) {
    // Can be a vector or enumeration.
    this.currentReference = enumPosition;
  }

  static GetAbsolutePosition(x, y) {
    // Converts a relative point to an absolute point
    var offset = this.GetOffset();
    return createVector(x + offset.x, y + offset.y);
  }

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
