/**
 * A static class meant to provide a bunch of physics formulas.
 * @class
 */
class PhysicsFormulas {
  static constructor() {
    this.newtonSecondF = FormulaTemplate.CreateBlankTemplate();
    this.newtonSecondF.formula = (m, a) => {return  m * a;};
    this.newtonSecondF.prompts.push("Enter the mass (kg):");
    this.newtonSecondF.prompts.push("Enter the acceleration (m/s^2):");
    this.newtonSecondF.resultPrompt = "The resulting force (N) is:";

    this.newtonSecondM = FormulaTemplate.CreateBlankTemplate();
    this.newtonSecondM.formula = (f, a) => {return  f / a;};
    this.newtonSecondM.prompts.push("Enter the force (N):");
    this.newtonSecondM.prompts.push("Enter the acceleration (m/s^2):");
    this.newtonSecondM.resultPrompt = "The resulting mass (kg) is:";
  }
};
