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
     * A dictionary of scenes that uses the name of a scene as its key.
     * New scenes should be added using AddScene().
     */
    this.scenes = {};

    /**
     * Name of the current scene (default: "MenuScene"). Changing this with ToScene() changes what
     * scene is rendered / updated.
     */
    this.currentScene = "MenuScene";
  }

  /**
   * Adds a scene to the dictionary.
   * @param {Scene} scene - The scene to be added. Scenes should have a Render() function.
   * @param {string} sceneName - The name of the scene to be added.
   */
  static AddScene(scene, sceneName) {
    // Only add scenes that are objects.
    if (typeof scene === 'object') {
      this.scenes[sceneName] = scene;
    }
    else {
      print("SceneManager.js: Can't add scene.")
    }
  }

  /**
   * Switches the current scene to another one.
   * @param {string} sceneName - The name of the scene.
   */
  static ToScene(sceneName) {
    if(sceneName in this.scenes) {
      this.currentScene = sceneName;
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
