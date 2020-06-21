var smh = [];

/**
 * A static class meant to provide a bunch of physics formulas.
 * @class
 */
class PhysicsFormulas {
  static constructor() {
    this.newtonSecondF = new FormulaUI((m,a) => {return m * a;});
    this.newtonSecondF.AddArgument("Enter the mass (kg):");
    this.newtonSecondF.AddArgument("Enter the acceleration (m/s^2):");
    //this.newtonSecondF.SetResultPrompt("The resulting force (N) is:");
  }
};
