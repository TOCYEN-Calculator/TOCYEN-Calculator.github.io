/**
 * Static class meant to provide and load a "template" for formula information.
 * @class
 */
class FormulaTemplate {
  /**
   * Constructor for FormulaTemplate. Should be called
   * before any functions of it are used.
   */
  static constructor() {
    /**
     * The current template used. Used for commnicating
     * formula information with FormulaScene.
     */
    this.currentTemplate = this.CreateBlankTemplate();

    /**
     * An event called whenever a new formula template is loaded.
     */
    this.onLoad = new Event();
  }

  /**
   * Returns a blank formula template.
   * @param  {string} previousScene Name of the previousScene.
   * @return {FormulaTemplate}  A dictionary with the following members:
   * resultPrompt (string), prompts (array), and formula (function).
   */
  static CreateBlankTemplate() {
    return {resultPrompt: "", prompts: [], formula: 0};
  }


  /**
   * Sets a formula template as the current template used.
   * Calls onLoad().
   *
   * @param  {FormulaTemplate} template description
   */
  static LoadTemplate(template, variable) {
    // Shallow-copy arrays.
    this.currentTemplate = this.CreateBlankTemplate();
    this.currentTemplate.resultPrompts = template.resultPrompts.slice();
    this.currentTemplate.prompts = template.prompts.slice();
    this.currentTemplate.formula = template.formula;
    this.currentTemplate.variable = variable;
    this.onLoad.Call();
  }
}
