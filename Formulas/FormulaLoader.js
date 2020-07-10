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
    this.currentTemplate = this.CreateBlankTemplate();

    /**
     * An event called whenever a new formula template is loaded.
     */
    this.onLoad = new Event();

    this.args = {};
  }

  /**
   * Returns a blank formula template.
   * @return {FormulaTemplate}  A dictionary with the following members:
   * resultPrompts (string), prompts (array), variable (string),and formula (Formula()).
   */
  static CreateBlankTemplate() {
    return {resultPrompts: {}, prompts: {}, formula: 0, variable: ""};
  }


  /**
   * Sets a formula template as the current template used.
   * Calls onLoad().
   *
   * @param  {FormulaTemplate} template The formula template to be loaded.
   * @param  {string} variable The variable to be solved for.
   */
  static LoadTemplate(template, variable) {
    this.currentTemplate = template;
    this.currentTemplate.variable = variable;
    this.onLoad.Call();
  }
}
