
/**
 * Scale.js
 *
 * Functions used to scale stuff according to screen height.
 */

function TextSize(size) {
  textSize(ScaleByWidth(size));
}

function ScaleByWidth(value) {
  return value * (width / 1920);
}

function ScaleByHeight(value) {
  return value * (height / 966);
}

function ScalePosition(position) {
  if(typeof position == 'object') {
    return createVector(ScaleByWidth(position.x), ScaleByWidth(position.y));
  }
  else {
    return position;
  }
}
