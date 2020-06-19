/*
 * Aligner.js
 *
 * Provides a position relative to a point in space.
*/

class Aligner {

  static constructor() {
    this.POSITION = {
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
    this.currentReference = this.POSITION.CENTER;
  }

  static ReferenceIsObject() {
    return this.currentReference === null || typeof this.currentReference === 'object';
  }

  static SetReference(enumPosition) {
    // Can be a vector or enumeration.
    this.currentReference = enumPosition;
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
      case this.POSITION.TOP:
        offset.y = 0;
        break;

      case this.POSITION.TOPLEFT:
        offset = createVector(0,0);
        break;

      case this.POSITION.TOPRIGHT:
        offset = createVector(width, 0);
        break;

      case this.POSITION.LEFT:
        offset.x = 0;
        break;

      case this.POSITION.RIGHT:
        offset.x = width;
        break;

      case this.POSITION.BOTTOMLEFT:
        offset = createVector(0, height);
        break;

      case this.POSITION.BOTTOM:
        offset.y = height;
        break;

      case this.POSITION.BOTTOMRIGHT:
        offset = createVector(width, height);
        break;
      }
    }

    return offset;
  }

};
