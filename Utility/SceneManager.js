/**
 * A manager of scenes.
 * @class
 */

class SceneManager {
  /**
   * Construct the SceneManager. This function should be called during
   * startup before any functions are used.
   */
  static constructor() {
    this.scenes = {};
    this.currentScene = 0;
    this.sceneID = 0;
  }

  /**
   * Adds a scene to the dictionary. Should be done on startup.
   * @param {Scene} scene - The scene to be added. Scenes should only have a Render() function.
   */
  static AddScene(scene) {
    if (typeof scene === 'object') {
      this.scenes[this.sceneID++] = scene;
    }
    else {
      print("SceneManager.js: Can't add scene.")
    }
  }

  /**
   * Switches the current scene to another one.
   * @param {number} sceneID - The ID of the scene. Increases incrementally for each AddScene().
   */
  static ToScene(sceneID) {
    if(sceneID in this.scenes) {
      this.currentScene = sceneID;
    }
    else {
      print("SceneManager.js: Scene does not exist.");
    }
  }

  /**
   * Renders the current scene.
   */
  static Render() {
    this.scenes[this.currentScene].Render();
  }

};
