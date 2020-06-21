/**
 * A static class meant to provide a bunch of physics formulas.
 * @class
 */
class PhysicsFormulas {
  static constructor() {
    this.newtonSecondF = FormulaTemplate.CreateBlankTemplate();
    this.newtonSecondF.formula = (x, y) => {return  x * y;};
    this.newtonSecondF.prompts.push("Enter the mass (kg):");
    this.newtonSecondF.prompts.push("Enter the acceleration (m/s^2):");
    this.newtonSecondF.resultPrompt = "The resulting force (N) is:";
  }
};
