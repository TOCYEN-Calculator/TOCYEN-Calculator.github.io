/**
 * A manager of scenes. Updates, renders, and changes scenes.
 * @class
 */

class SceneManager {
  /**
   * Construct the SceneManager. This function should be called during
   * startup before any functions are used.
   */
  static constructor() {
    /**
     * A dictionary of scenes. Uses sceneID as a key for each scene.
     * New scenes should be added using AddScene().
     */
    this.scenes = {};

    /**
     * SceneID of the current scene. Changing this with ToScene() changes what
     * scene is rendered / updated.
     */
    this.currentScene = 0;

    /**
     * An incremental integer that is used to identity scenes. Gets incremented by
     * one each time AddScene() is called.
     */
    this.sceneID = 0;
  }

  /**
   * Adds a scene to the dictionary. Should be done on startup.
   * @param {Scene} scene - The scene to be added. Scenes should have a Render() function.
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
