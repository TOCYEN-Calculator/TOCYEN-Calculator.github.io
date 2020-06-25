
/**
 * Class meant to scale values based on screen width or height.
 *
 * @class
 */
class Scaler {
  static TextSize(size) {
    if(typeof size == 'number') {
      textSize(this.ScaleByWidth(size));
    }
    else {
      print(`Scale.js: Could not set \"${size}\" as a scaled text size.`)
    }
  }

  static ScaleByWidth(value) {
    if(typeof value != 'number') {
      print(`Scale.js: Could not scale \"${value}\" by the window\'s width.`)
      return 0;
    }
    return value * (width / 1920);
  }

  static ScaleByHeight(value) {
    if(typeof value != 'number') {
      print(`Scale.js: Could not scale \"${value}\" by the window\'s height.`)
      return 0;
    }
    return value * (height / 966);
  }

  static ScalePosition(position) {
    if(position === null) {
      print(`Scale.js: Could not scale \"${position}\" as a position.`);
      return createVector(0, 0);
    }
    else if(typeof position == 'object') {
      return createVector(this.ScaleByWidth(position.x), this.ScaleByWidth(position.y));
    }
    else {
      return position;
    }
  }
}
