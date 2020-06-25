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
    this.newtonSecondF = FormulaTemplate.CreateBlankTemplate();
    this.newtonSecondF.formula = (m, a) => {return  m * a;};
    this.newtonSecondF.prompts = [massPrompt, accelerationPrompt];
    this.newtonSecondF.resultPrompt = "The resulting force (N) is:";

    this.newtonSecondM = FormulaTemplate.CreateBlankTemplate();
    this.newtonSecondM.formula = (f, a) => {return  f / a;};
    this.newtonSecondM.prompts = [forcePrompt, accelerationPrompt];
    this.newtonSecondM.resultPrompt = "The resulting mass (kg) is:";

    this.newtonSecondA = FormulaTemplate.CreateBlankTemplate();
    this.newtonSecondA.formula = (f, m) => {return  f / m;};
    this.newtonSecondA.prompts = [forcePrompt, massPrompt];
    this.newtonSecondA.resultPrompt = "The resulting acceleration (m/s^2) is:";

    // Kinetic Energy
    this.kineticEnergyK = FormulaTemplate.CreateBlankTemplate();
    this.kineticEnergyK.formula = (m, v) => {return  0.5 * m * pow(v, 2);};
    this.kineticEnergyK.prompts = [massPrompt, velocityPrompt];
    this.kineticEnergyK.resultPrompt = "The resulting kinetic energy (J) is:";

    this.kineticEnergyM = FormulaTemplate.CreateBlankTemplate();
    this.kineticEnergyM.formula = (k, v) => {return  (2 * k) / pow(v, 2);};
    this.kineticEnergyM.prompts = [kineticPrompt, velocityPrompt];
    this.kineticEnergyM.resultPrompt = "The resulting mass (kg) is:";

    this.kineticEnergyV = FormulaTemplate.CreateBlankTemplate();
    this.kineticEnergyV.formula = (k, m) => {return  sqrt((2 * k) / m);};
    this.kineticEnergyV.prompts = [kineticPrompt, massPrompt];
    this.kineticEnergyV.resultPrompt = "The velocity (m/s^2) is:";

    this.kineticEnergyVI = FormulaTemplate.CreateBlankTemplate();
    this.kineticEnergyVI.formula = (k, m, vf) => {return -sqrt((2 * k) / m) + vf;};
    this.kineticEnergyVI.prompts = [kineticPrompt, massPrompt, velocityFPrompt];
    this.kineticEnergyVI.resultPrompt = "The initial velocity (m/s^2) is:";

    this.kineticEnergyVF = FormulaTemplate.CreateBlankTemplate();
    this.kineticEnergyVF.formula = (k, m, vi) => {return sqrt((2 * k) / m) + vi;};
    this.kineticEnergyVF.prompts = [kineticPrompt, massPrompt, velocityIPrompt];
    this.kineticEnergyVF.resultPrompt = "The final velocity (m/s^2) is:";
  }
};
