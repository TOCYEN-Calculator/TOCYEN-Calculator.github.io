/**
 * Static class meant to provide and load a "template" for formula information.
 * @class
 */
class FormulaLoader {
  /**
   * Constructor for FormulaTemplate. Should be called
   * before any functions of it are used.
   */
  static constructor() {
    /**
     * The current template used. Used for commnicating
     * formula information with FormulaScene.
     */
    this.currentTemplate = new FormulaInfo();

    /**
     * An event called whenever a new formula template is loaded.
     */
    this.onLoad = new Event();

    this.args = {};
  }

  static LoadFormula(formulaInfo, variable) {
    this.currentTemplate = formulaInfo;
    this.currentTemplate.variable = variable;
    this.onLoad.Call();
  }
}
