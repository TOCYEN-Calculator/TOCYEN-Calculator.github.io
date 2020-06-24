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
    this.currentScene = "Mechanics";
  }

  /**
   * Adds a scene to the dictionary. Scene's key is equal to its class name /
   * constructor.name .
   * @param {Scene} scene - The scene to be added. Scenes should have a Render() function.
   */
  static AddScene(scene) {
    // Only add scenes that are objects.
    if (typeof scene === 'object') {
      this.scenes[scene.constructor.name] = scene;
    }
    else {
      print(`SceneManager.js: Could not add \"${str(scene)}\" to the dictionary. Please make \
sure that the parameter is a object with a Render() method with no constructor parameters.`)
    }
  }

  /**
   * Switches the current scene to another one.
   * @param {string} sceneName - The name of the scene.
   */
  static ToScene(sceneName) {
    // See if the name of scene exists as a key.
    if(sceneName in this.scenes) {
      this.currentScene = sceneName;
    }
    else {
      print(`SceneManager.js: Scene name \"${sceneName}\" does not exist.`);
    }
  }

  /**
   * Renders the current scene.
   */
  static Render() {
    this.scenes[this.currentScene].Render();
  }

};
