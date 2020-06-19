/*
 * SceneManager.js
 *
 * Provides a manager for scenes.
*/

class SceneManager {
  static constructor() {
    this.scenes = {};
    this.currentScene = 0;
    this.sceneID = 0;
  }

  static AddScene(scene) {
    if (typeof scene === 'object') {
      this.scenes[this.sceneID++] = scene;
    }
    else {
      print("SceneManager.js: Can't add scene.")
    }
  }

  static ToScene(sceneID) {
    if(sceneID in this.scenes) {
      this.currentScene = sceneID;
    }
    else {
      print("SceneManager.js: Scene does not exist.");
    }
  }

  static Render() {
    this.scenes[this.currentScene].Render();
  }

};
