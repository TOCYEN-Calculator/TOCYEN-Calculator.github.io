/*
 * Base class for scenes. Should be derived from all scenes.
 *
 * @class
 */
class Scene {
  constructor() {

    /**
     * The array of elements of the current page. UI elements
     * should be push() to here in a child scene.
     */
    this.elements = [];

    /**
     * Array of pages. Each page is a list of elements.
     */
    this.pages = [];
  }


  /**
   * Renders the current page.
   */
  Render() {
    for(var i = 0; i < this.elements.length; i++) {
      this.elements[i].Render();
    }
  }


  /**
   * Starts a new page by saving current elements, and
   * clearing it out.
   */
  NewPage() {
    this.SavePage();
    this.elements = [];
  }


  /**
   * Saves the page. Should be called at the last page of a
   * scene.
   */
  SavePage() {
    this.pages.push(this.elements);
  }


  /**
   * Tries to load a page by its index number.
   *
   * @param {number} index Index of the page in this.pages.
   */
  ToPage(index) {
    if(index in this.pages) {
      this.elements = this.pages[index];
    }
    else {
      print(`Scene.js: Page index ${index} was not a valid page.`);
    }
  }
}
