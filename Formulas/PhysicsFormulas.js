/**
 * A static class meant to provide a bunch of physics formulas.
 * @class
 */
class PhysicsFormulas {
  /**
   * Initialize physics formulas. Should be called on setup().
   */
  static constructor() {
    // Prompts
    var massPrompt = "Enter the mass (kg):";
    var velocityPrompt = "Enter the velocity (m/s):";
    var velocityIPrompt = "Enter the initial velocity (m/s):";
    var velocityFPrompt = "Enter the final velocity (m/s):";
    var accelerationPrompt = "Enter the acceleration (m/s^2):";
    var forcePrompt = "Enter the force (N):";
    var kineticPrompt = "Enter the kinetic energy (J):";


    // Newton's Second Law
    this.newtonSecond = FormulaTemplate.CreateBlankTemplate();
    this.newtonSecond.formula = new Formula("F = m * a", {F: null, m: null, a: null});
    this.newtonSecond.prompts = [forcePrompt, massPrompt, accelerationPrompt];
    this.newtonSecond.resultPrompts = ["The resulting force (N) is:", "M) is:", "A) is:"];
  }
};
