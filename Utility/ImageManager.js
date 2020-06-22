
class ImageManager {
  static constructor() {
    this.images = {};
  }

  static LoadImage(name, path) {
    loadImage(path, (image) => this.AddImage(name, image));
  }

  static AddImage(name, image) {
    this.images[name] = image;
  }

  static Render() {
    for(var key in this.images) {
      //image(this.images[key], 0, 0);
    }
  }
}
