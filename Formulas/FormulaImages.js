/**
 * A static class meant to load megatextures of
 * formulas.
 *
 * @class
 */
class FormulaImages {
  static constructor() {
    this.images = {};
  }

  static CallbackSuccess(path, image) {
    var imageInfo = this.images[path];
    imageInfo.loaded = true;
    imageInfo.image = image;
    imageInfo.onLoad.Call(image);
  }

  /**
   * Given a string, load an image into the dictionary.
   * Callbacks to this image are given in OnImage().
   *
   * @param {string} path Name of the file to be loaded.
   */
  static LoadImage(path) {
    this.images[path] = {
      path: path,
      loaded: false,
      image: loadImage(path, (image) => this.CallbackSuccess(path, image)),
      onLoad: new Event()
    }
  }


  /**
   * Adds a function to a callback until the image is loaded.
   *
   * @param  {string} imageName The name of the image. Will print out an error
   * if it doesn't exist in the dictionary.
   * @param  {function} func    A callback function with (image) as its parameters.
   */
  static OnImage(path, func) {
    if(path in this.images) {
      var imageInfo = this.images[path];
      if(!imageInfo.loaded) {
        imageInfo.onLoad.AddListener(func);
      }
      else {
        func(imageInfo.image);
      }
    }
    else {
      print(`FormulaImages.js: Could not find \"${path}\" in dictionary.`);
    }
  }
}
