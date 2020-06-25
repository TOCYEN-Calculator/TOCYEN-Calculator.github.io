/**
 * A element that deals with rendering and positioning images on screen.
 * Derives from Element.
 *
 * @class
 */
class ImageElement extends Element {
  /**
   * Constructs an ImageElement. Image will not be loaded immediantly.
   *
   * @param {string | Image} path     The path of the image, or a p5.js image.
   * @param {Vector | None | Number} position -
   * VECTOR: The relative position of the text's center on the canvas.
   * NONE: Automatically Aligner.GetNextPosition().
   * Number: The padding of Aligner.GetNextPosition().
   * @param  {number} width    Width of the image. Can be omiited to automatically be set to the
   * original width.
   * @param  {number} height   Height of the image. Can be omiited to automatically be set to the
   * original height.
   */
  constructor(path, position, width, height) {
    super(position);

    this.image = null;

    this.width = width;
    this.height = height;

    this.loaded = false;

    this.path = "";
    if(typeof path == 'string') {
      loadImage(path, (image) => this.CallbackSuccess(image), () => this.CallbackFail());
      this.path = path;
    }
    else {
      this.CallbackSuccess(path);
    }

    this.scrRect = null;
  }

  SetScrRect(x, y, w, h) {
    this.scrRect = {
      x: x,
      y: y,
      w: w,
      h: h
    };
    this.width = w;
    this.height = h;
  }

  Scale(scalar) {
    this.width *= scalar;
    this.height *= scalar;
  }

  /**
   * Draws the image.
   */
  Render() {
    if(this.loaded) {
      // If there's a source rect, render it.
      if(this.scrRect === null) {
        image(this.image, this.position.x, this.position.y, this.width, this.height);
      }
      else {
        image(this.image, this.position.x, this.position.y, this.width, this.height, this.scrRect.x, this.scrRect.y, this.scrRect.w, this.scrRect.h);
      }
    }
  }

  CallbackSuccess(image) {
    this.image = image;
    this.loaded = true;
  }

  CallbackFail() {
    print(`ImageElement.js: Could not load \"${this.path}\".`);
  }
}
