/**
 * A element that deals with rendering and positioning images on screen.
 *
 * @class
 */
class ImageElement {
  constructor(path, position, width, height) {
    loadImage(path, (image) => this.CallbackSuccess(image), () => this.CallbackFail());

    this.path = path;
    this.image = null;
    this.position = Aligner.GetAbsolutePosition(position.x, position.y);

    this.originalDimensions = arguments.length != 4;

    this.width = width;
    this.height = height;

    this.loaded = false;
  }

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
