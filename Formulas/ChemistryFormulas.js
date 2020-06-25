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

      for(var key in this.orbitals) {
        var value = this.orbitals[key]

        if(sum + value > n) {
          break;
        }
        else {
          output += key + "^" + str(value) + " ";
          sum += value;
        }
      }

      return output;
    }
    this.electronConfiguration.prompts.push("Enter the number of electrons:");
    this.electronConfiguration.resultPrompt = "The likely electron configuration is:";
  }
};
