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
    var amuPrompt = "Enter the molar mass (g / mol):";
    var molePrompt = "Enter the moles (mol):";
    var literPrompt = "Enter the amount of liters (l):";
    var molarityPrompt = "Enter the molarity (mol / l):";
    var atomPrompt = "Enter the number of atoms:";
    var specificPrompt = "Enter the specific heat capacity (J / (g * celsius)):";
    var tempaturePrompt = "Enter the change in tempature (celsius):";
    var changePrompt = "Enter the change in heat capacity (J):";
    var tempatureInitialPrompt = "Enter the initial tempature (celsius):";
    var tempatureFinalPrompt = "Enter the final tempature (celsius):";


    // Heat change
    this.heatChange = FormulaTemplate.CreateBlankTemplate();
    this.heatChange.formula = new Formula("q = m * c * T", {q: null, m: null, c: null, T: null});
    this.heatChange.prompts = {q: changePrompt, m: massPrompt, c: specificPrompt, T: tempaturePrompt};
    this.heatChange.resultPrompts = {
      q: "The resulting heat capacity (J) is:",
      m: "The resulting mass (g) is:",
      c: "The resulting specific heat (J / (g * celsius)) is:",
      T: "The resulting tempature change (celsius) is:",
    };

    this.heatChange2 = FormulaTemplate.CreateBlankTemplate();
    this.heatChange2.formula = new Formula("q = m * c * (Tf - Ti)", {q: null, m: null, c: null, Tf: null, Ti: null});
    this.heatChange2.prompts = {q: changePrompt, m: massPrompt, c: specificPrompt, Ti: tempatureInitialPrompt, Tf: tempatureFinalPrompt};
    this.heatChange2.resultPrompts = {
      q: "The resulting heat capacity (J) is:",
      m: "The resulting mass (g) is:",
      c: "The resulting specific heat (J / (g * celsius)) is:",
      Ti: "The initial tempature (celsius) is:",
      Tf: "The final tempature (celsius) is:"
    };


    // Molar Conversions
    this.molByGram = FormulaTemplate.CreateBlankTemplate();
    this.molByGram.formula = new Formula("mol = g / molg", {g: null, mol: null, molg: null});
    this.molByGram.prompts = {g: massPrompt, mol: molePrompt, molg: amuPrompt};
    this.molByGram.resultPrompts = {
      g: "The resulting mass (g) is:",
      mol: "The resulting moles (mol) is:",
      molg: "The resulting molar mass (mol / g) is:"
    };

    this.molByAtoms = FormulaTemplate.CreateBlankTemplate();
    this.molByAtoms.formula = new Formula("mol = atoms / (6.02 * 10^23)", {atoms: null, mol: null});
    this.molByAtoms.prompts = {atoms: atomPrompt, mol: molePrompt};
    this.molByAtoms.resultPrompts = {
      atoms: "The resulting number of atoms / molecules is:",
      mol: "The resulting moles (mol) is:"
    };

    this.molgByAtoms = FormulaTemplate.CreateBlankTemplate();
    this.molgByAtoms.formula = new Formula("(g * molg) = atoms * (6.02 * 10^23)", {g: null, atoms: null, molg: null});
    this.molgByAtoms.prompts = {g: massPrompt, atoms: atomPrompt, molg: amuPrompt};
    this.molgByAtoms.resultPrompts = {
      g: "The resulting mass (g) is:",
      atoms: "The resulting number of atoms / molecules is:",
      molg: "The resulting molar mass (mol / g) is:"
    };



    // Mass of a product
    this.massOfPR = FormulaTemplate.CreateBlankTemplate();
    this.massOfPR.formula = (mgiven, gpmgiven, fracgiven, fracdesired, gpmdesired) => {return  (mgiven * fracdesired * gpmdesired) / (gpmgiven * fracgiven);};
    this.massOfPR.prompts = [
    "Enter the mass (g) of the given:",
    "Enter the grams per mole (g / mol) of the given",
    "Enter the given part of the ratio:",
    "Enter the desired part of the ratio:",
    "Enter the grams per mole (g / mol) of the desired:"];
    this.massOfPR.resultPrompt = "The resulting mass (g) of the desired is:";

    this.moleofPR = FormulaTemplate.CreateBlankTemplate();
    this.moleofPR.formula = (mgiven, gpmgiven, fracgiven, fracdesired) => {return  (mgiven * fracdesired) / (gpmgiven * fracgiven);};
    this.moleofPR.prompts = [
    "Enter the mass (g) of the given:",
    "Enter the grams per mole (g / mol) of the given",
    "Enter the given part of the ratio:",
    "Enter the desired part of the ratio:"];
    this.moleofPR.resultPrompt = "The resulting moles (mol) of the desired is:";


    // Molarity
    this.molarityOfGramM = FormulaTemplate.CreateBlankTemplate();
    this.molarityOfGramM.formula = (grams, gpm, liters) => {return  (grams / gpm) / liters;};
    this.molarityOfGramM.prompts = [massPrompt, amuPrompt, literPrompt];
    this.molarityOfGramM.resultPrompt = "The molarity (mol / g) of the solution is:";

    this.molarityOfGramL = FormulaTemplate.CreateBlankTemplate();
    this.molarityOfGramL.formula = (grams, gpm, molarity) => {return  (grams / gpm) / molarity;};
    this.molarityOfGramL.prompts = [massPrompt, amuPrompt, molarityPrompt];
    this.molarityOfGramL.resultPrompt = "The liters (l) in this solution is:";

    this.molarityOfGramG = FormulaTemplate.CreateBlankTemplate();
    this.molarityOfGramG.formula = (liter, molarity, gpm) => {return  liter * molarity * gpm;};
    this.molarityOfGramG.prompts = [literPrompt, molarityPrompt, amuPrompt];
    this.molarityOfGramG.resultPrompt = "The mass (g) of the solute is:";

    this.molarityOfGramMM = FormulaTemplate.CreateBlankTemplate();
    this.molarityOfGramMM.formula = (liter, molarity, grams) => {return  1 / ((liter * molarity) / grams);};
    this.molarityOfGramMM.prompts = [literPrompt, molarityPrompt, massPrompt];
    this.molarityOfGramMM.resultPrompt = "The molar mass (g / mol) of the solute is:";

    this.molarityOfMoleM = FormulaTemplate.CreateBlankTemplate();
    this.molarityOfMoleM.formula = (mole, liters) => {return  mole / liters;};
    this.molarityOfMoleM.prompts = [molePrompt, literPrompt];
    this.molarityOfMoleM.resultPrompt = "The molarity (mol / g) of the solution is:";

    this.molarityOfMoleL = FormulaTemplate.CreateBlankTemplate();
    this.molarityOfMoleL.formula = (mole, molarity) => {return  mole / molarity;};
    this.molarityOfMoleL.prompts = [molePrompt, molarityPrompt];
    this.molarityOfMoleL.resultPrompt = "The liters (l) in this solution is:";

    this.molarityOfMoleMol = FormulaTemplate.CreateBlankTemplate();
    this.molarityOfMoleMol.formula = (molarity, liters) => {return  molarity * liters;};
    this.molarityOfMoleMol.prompts = [molarityPrompt, literPrompt];
    this.molarityOfMoleMol.resultPrompt = "The moles (mol) in this solution is:";

  }
};
