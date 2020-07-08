
/**
 * Scales values dependant on the window's width or height.
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
     * The reference width of the scaling.
     */
    this.referenceWidth = 1920;

    /**
     * The reference height of the scaling.
     */
    this.referenceHeight = 966;
  }

  /**
   * Scales a number by the reference width.
   *
   * @param {number} value The number to be scaled.
   */
  static ScaleByWidth(value) {
    if(typeof value != 'number') {
      print(`Scale.js: Could not scale \"${value}\" by the window\'s width, as it\'s not a number!`)
      return 0;
    }
    return value * (window.innerWidth / this.referenceWidth);
  }

  /**
   * Scales a number by the reference height.
   *
   * @param {number} value The number to be scaled.
   */
  static ScaleByHeight(value) {
    if(typeof value != 'number') {
      print(`Scale.js: Could not scale \"${value}\" by the window\'s height, as it\'s not a number!`)
      return 0;
    }
    return value * (window.innerHeight / this.referenceHeight);
  }

  /**
   * Scales a position vector using ScaleByWidth.
   *
   * @param  {Vector} position The relative position of the vector.
   * @return {Vector} A copy of the scaled vector.
   */
  static ScalePosition(position) {
    if(position === null || typeof position != 'object') {
      print(`Scale.js: Could not scale \"${position}\", as it\'s not a vector!.`);
      return createVector(0, 0);
    }
    else {
      return createVector(this.ScaleByWidth(position.x), this.ScaleByWidth(position.y));
    }
  }
}
