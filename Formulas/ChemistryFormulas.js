/**
 * A static class meant to provide a bunch of chemistry formulas.
 * @class
 */
class ChemistryFormulas {
  static constructor() {
    this.electronConfiguration = FormulaTemplate.CreateBlankTemplate();
    this.electronConfiguration.formula = function(n) {
      return "Yessir";
    }
    this.electronConfiguration.prompts.push("Enter the number of electrons:");
    this.electronConfiguration.resultPrompt = "The likely electron configuration is:";
  }
};
