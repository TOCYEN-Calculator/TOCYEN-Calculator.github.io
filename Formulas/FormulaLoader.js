/**
 * Static class meant to load a FormulaInfo.js into global scope.
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
    this.currentFormula = new FormulaInfo();

    /**
     * An event called whenever a new formula template is loaded.
     */
    this.onLoad = new Event();
  }

  static LoadFormula(formulaInfo, variable) {
    if(typeof formulaInfo != 'object') {
      print(`FormulaLoader.js: \"${formulaInfo}\" was not a FormulaInfo.js class. Will not be loaded.`);
    }
    else if (typeof variable != 'string') {
      print(`FormulaLoader.js: Variable \"${variable}\" was not a string. Will not be loaded.`);
    }
    else {
      this.currentFormula = formulaInfo;
      this.currentFormula.variable = variable;
      this.onLoad.Call();
    }
  }
}
