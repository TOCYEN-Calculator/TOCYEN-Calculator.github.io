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
   * @param  {string} path     The path of the image. Image won't be loaded immediantly.
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

    loadImage(path, (image) => this.CallbackSuccess(image), () => this.CallbackFail());

    this.path = path;
    this.image = null;

    this.originalDimensions = arguments.length != 4;

    this.width = width;
    this.height = height;

    this.loaded = false;
  }

  /**
   * Draws the image.
   */
  Render() {
    if(this.loaded) {
      image(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }

  CallbackSuccess(image) {
    this.image = image;
    this.loaded = true;

    if(this.originalDimensions) {
      this.width = this.image.width;
      this.height = this.image.height;
    }
  }

  CallbackFail() {
    print(`ImageElement.js: Could not load \"${this.path}\".`);
  }
}
