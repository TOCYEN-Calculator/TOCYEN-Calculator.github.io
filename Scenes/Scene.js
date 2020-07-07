/*
 * Base class for scenes. Should be derived from all scenes.
 *
 * @class
 */
class Scene {
  constructor() {

    /**
     * The array of elements representing the content of the page. UI elements
     * should be push() to here in a child scene.
     */
    this.elements = [];

    /**
     * An event called when the scene leaves the current scene.
     */
    this.onEnter = new Event();

    /**
     * An event called when the scene enters the current scene.
     */
    this.onLeave = new Event();
  }

  LinkElements() {
    for(var index in this.elements) {
      this.elements[index].Show();
    }
  }

  /**
   * Renders all elements.
   */
  Render() {

  }
}
