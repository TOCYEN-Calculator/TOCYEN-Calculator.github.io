/*
 * SceneManager.js
 *
 * Provides a manager for scenes.
*/

class SceneManager {
  static constructor() {
    this.scenes = [];
    this.currentScene = 0;
  }

  static AddScene(scene) {
    if (typeof scene === 'object') {
      this.scenes.push(scene);
    }
    else {
      print("SceneManager.js: Can't add scene.")
    }
  }

  static Render() {
    for(var i = 0; i < this.scenes.length; i++) {
      this.scenes[i].Render();
    }
  }

};
