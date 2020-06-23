/**
 * A element that deals with rendering and positioning images on screen.
 *
 * @class
 */
class ImageElement {
  constructor(path, position, width, height) {
    this.image = loadImage(path);
    this.position = Aligner.GetAbsolutePosition(position.x, position.y);
    this.width = width;
    this.height = height;
  }

  Render() {
    image(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}
