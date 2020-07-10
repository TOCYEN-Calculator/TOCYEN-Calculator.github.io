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
    this.newtonSecond = new FormulaInfo();
    this.newtonSecond.formula = new Formula("F = m * a", {F: null, m: null, a: null});
    this.newtonSecond.prompts = {m: massPrompt, F: forcePrompt, a: accelerationPrompt};
    this.newtonSecond.resultPrompts = {F: "The resulting force (N) is:", m: "M) is:", a: "A) is:"};

    // Kinetic Energy
    this.kineticEnergy = new FormulaInfo();
    this.kineticEnergy.formula = new Formula("KE = 0.5 * m * v^2", {KE: null, m: null, v: null});
    this.kineticEnergy.prompts = {KE: kineticPrompt, m: massPrompt, v:velocityPrompt};
    this.kineticEnergy.resultPrompts = {KE:"The resulting force (KE) is:", m:"M) is:", v:"v) is:"};
  }
};
