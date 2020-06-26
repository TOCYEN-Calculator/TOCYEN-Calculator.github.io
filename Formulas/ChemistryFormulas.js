/**
 * A static class meant to provide a bunch of chemistry formulas.
 * @class
 */
class ChemistryFormulas {

  /**
   * Initialize physics formulas. Should be called on setup().
   */
  static constructor() {

    this.orbitals = {
      "1s": 2,
      "2s": 2,
      "2p": 6,
      "3s": 2,
      "3p": 6,
      "4s": 2,
      "3d": 10,
      "4p": 6,
      "5s": 2,
      "4d": 10,
      "5p": 6,
      "6s": 2,
      "4f": 14,
      "5d": 10,
      "6p": 6,
      "7s": 2,
      "5f": 14,
      "6d": 10,
      "7p": 6
    };

    this.electronConfiguration = FormulaTemplate.CreateBlankTemplate();
    this.electronConfiguration.formula = (n) => {

      let output = "";
      let sum = 0;

      for (var key in this.orbitals) {
        var value = this.orbitals[key]

        if (sum + value > n) {
          break;
        } else {
          output += key + "^" + str(value) + " ";
          sum += value;
        }
      }

      return output;
    }
    this.electronConfiguration.prompts.push("Enter the number of electrons:");
    this.electronConfiguration.resultPrompt = "The likely electron configuration is:";





    var massPrompt = "Enter the mass (g):";
    var specificPrompt = "Enter the specific heat capacity (J / (g * celsius)):";
    var tempaturePrompt = "Enter the change in tempature (celsius):";
    var changePrompt = "Enter the change in heat capacity (J):";
    var tempatureInitialPrompt = "Enter the initial tempature (celsius):";
    var tempatureFinalPrompt = "Enter the final tempature (celsius):";


    // Heat change
    this.heatChangeQ = FormulaTemplate.CreateBlankTemplate();
    this.heatChangeQ.formula = (m, c, t) => {return  m * c * t;};
    this.heatChangeQ.prompts = [massPrompt, specificPrompt, tempaturePrompt];
    this.heatChangeQ.resultPrompt = "The resulting heat capacity (J) is:";

    this.heatChangeM = FormulaTemplate.CreateBlankTemplate();
    this.heatChangeM.formula = (q, c, t) => {return  q / (c * t);};
    this.heatChangeM.prompts = [changePrompt, specificPrompt, tempaturePrompt];
    this.heatChangeM.resultPrompt = "The resulting mass (g) is:";

    this.heatChangeC = FormulaTemplate.CreateBlankTemplate();
    this.heatChangeC.formula = (q, m, t) => {return  q / (m * t);};
    this.heatChangeC.prompts = [changePrompt, massPrompt, tempaturePrompt];
    this.heatChangeC.resultPrompt = "The resulting specific heat (J / (g * celsius)) is:";

    this.heatChangeT = FormulaTemplate.CreateBlankTemplate();
    this.heatChangeT.formula = (q, m, c) => {return  q / (m * c);};
    this.heatChangeT.prompts = [changePrompt, massPrompt, specificPrompt];
    this.heatChangeT.resultPrompt = "The resulting tempature change (celsius) is:";

    this.heatChangeTI = FormulaTemplate.CreateBlankTemplate();
    this.heatChangeTI.formula = (q, m, c, tf) => {return  -(q / (m * c)) + tf;};
    this.heatChangeTI.prompts = [changePrompt, massPrompt, specificPrompt, tempatureFinalPrompt];
    this.heatChangeTI.resultPrompt = "The initial tempature (celsius) is:";

    this.heatChangeTF = FormulaTemplate.CreateBlankTemplate();
    this.heatChangeTF.formula = (q, m, c, ti) => {return  (q / (m * c)) + ti;};
    this.heatChangeTF.prompts = [changePrompt, massPrompt, specificPrompt, tempatureInitialPrompt];
    this.heatChangeTF.resultPrompt = "The final tempature (celsius) is:";

  }
};
