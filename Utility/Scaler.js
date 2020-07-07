
/**
 * Class meant to scale values based on screen width or height.
 *
 * @class
 */
class Scaler {

  /**
   * Static constructor. Should be called on setup() before
   * any functions are called.
   */
  static constructor() {
    /**
     * The reference width / The width of the window you're
     * developing on.
     */
    this.referenceWidth = 1920;

    /**
     * The reference height / The height of the window you're
     * developing on.
     */
    this.refrenceHeight = 966;
  }

  /**
   * Scales text size based off reference size.
   *
   * @param {number} size The text size.
   */
  static TextSize(size) {
    if(typeof size == 'number') {
      textSize(size);
    }
    else {
      print(`Scale.js: Could not set \"${size}\" as a scaled text size.`)
    }
  }


  /**
   * Scales a number by the reference width.
   *
   * @param {number} value The number to be scaled.
   */
  static ScaleByWidth(value) {
    if(typeof value != 'number') {
      print(`Scale.js: Could not scale \"${value}\" by the window\'s width.`)
      return 0;
    }
    return value * (width / this.referenceWidth);
  }

  /**
   * Scales a number by the reference height.
   *
   * @param {number} value The number to be scaled.
   */
  static ScaleByHeight(value) {
    if(typeof value != 'number') {
      print(`Scale.js: Could not scale \"${value}\" by the window\'s height.`)
      return 0;
    }
    return value * (height / this.referenceHeight);
  }

  /**
   * Scales a vector using ScaleByWidth or ScaleByHeight. Usually
   * used for scaling positioning.
   *
   * @param  {Vector} position The vector; Usually a relative position.
   * @return {Vector} A shallow copy of the scaled vector.
   */
  static ScalePosition(position) {
    if(position === null) {
      print(`Scale.js: Could not scale \"${position}\" as a position.`);
      return createVector(0, 0);
    }
    else if(typeof position == 'object') {
      return createVector(this.ScaleByWidth(position.x), this.ScaleByWidth(position.y));
    }
    else {
      // If the position is a number. Crucial for Element.js, where
      // the position can represent the spacing between elements.
      return position;
    }
  }
}
