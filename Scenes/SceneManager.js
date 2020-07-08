/*
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
     * Name of the current scene (default: "MenuScene"). Changed with ToScene() 
     */
    this.currentScene = "";


    /**
     * Dynamic previous scene variable.
     */
    this.previousScene = "";
  }

  /**
   * Adds a scene to the dictionary. Scene's key is equal to its class name /
   * constructor.name .
   * @param {Scene} scene - The scene to be added. Scenes should derive from Scene.js
   */
  static AddScene(scene) {
    // Only add scenes that are objects.
    if (typeof scene === 'object') {
      this.scenes[scene.constructor.name] = scene;
    }
    else {
      print(`SceneManager.js: Could not add \"${scene}\" to the dictionary. Please make \
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
      this.previousScene = this.currentScene;
      this.currentScene = sceneName;

      // If a previous scene hasn't been set.
      if(this.previousScene == "") {
        this.previousScene = sceneName;
      }

      this.scenes[this.previousScene].onLeave.Call();
      this.scenes[this.currentScene].onEnter.Call();
    }
    else {
      print(`SceneManager.js: Scene name \"${sceneName}\" does not exist.`);
    }
  }
};
