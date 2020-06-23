
/**
 * Manager of loading and drawing images.
 */
class ImageManager {
  /**
   * Constructs the ImageManager. Should be done before any
   * images are loaded.
   */
  static constructor() {
    this.images = {};
  }

  /**
   * Loads a image from a path and adds it to the
   * dictionary with a key with a callback.
   *
   * @param  {string} name The name of the key for the image.
   * @param  {string} path The relative path of the image. Could also be a
   *                       HTML link.
   */
  static LoadImage(name, path) {
    loadImage(path, (image) => this.AddImage(name, image));
  }


  /**
   * Obtains a image from the dictionary. Prints out an error
   * if it can't find it.
   *
   * @param  {string} name The key of the image, as a string.
   * @return {Image}  A p5.js image.
   */
  static GetImage(name) {
    if(name in this.images) {
      return this.images[name];
    }
    else {
      print(`ImageManager.js: Could not find ${name} in the dictionary!`);
      return null;
    }
  }


  /**
   * A callback function that keeps an image into the dictionary
   * once p5.js has loaded it.
   *
   * @param  {string} name  The key of the image, as a string.
   * @param  {Image}  image A p5.js image.
   */
  static LoadCallback(name, image) {
    this.images[name] = image;
  }

  static Render() {
    // TEMP
    for(var key in this.images) {
      //image(this.images[key], 0, 0);
    }
  }
}
