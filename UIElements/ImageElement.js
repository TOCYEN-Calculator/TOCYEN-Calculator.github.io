class ImageElement {
  constructor(path) {
    this.image = loadImage(path);
  }

  Render() {
    image(this.image, 0, 0);
  }
}
