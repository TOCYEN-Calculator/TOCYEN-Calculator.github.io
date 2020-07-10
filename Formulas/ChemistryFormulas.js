/**
 * A static class meant to provide a bunch of chemistry formulas.
 * @class
 */
class ChemistryFormulas {

  /**
   * Initialize physics formulas. Should be called on setup().
   */
  static constructor() {
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
    this.heatChange = new FormulaInfo();
    this.heatChange.formula = new Formula("q = m * c * T", {q: null, m: null, c: null, T: null});
    this.heatChange.prompts = {q: changePrompt, m: massPrompt, c: specificPrompt, T: tempaturePrompt};
    this.heatChange.resultPrompts = {
      q: "The resulting heat capacity (J) is:",
      m: "The resulting mass (g) is:",
      c: "The resulting specific heat (J / (g * celsius)) is:",
      T: "The resulting tempature change (celsius) is:",
    };

    this.heatChange2 = new FormulaInfo();
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
    this.molByGram = new FormulaInfo();
    this.molByGram.formula = new Formula("mol = g / molg", {g: null, mol: null, molg: null});
    this.molByGram.prompts = {g: massPrompt, mol: molePrompt, molg: amuPrompt};
    this.molByGram.resultPrompts = {
      g: "The resulting mass (g) is:",
      mol: "The resulting moles (mol) is:",
      molg: "The resulting molar mass (mol / g) is:"
    };

    this.molByAtoms = new FormulaInfo();
    this.molByAtoms.formula = new Formula("mol = atoms / (6.02 * 10^23)", {atoms: null, mol: null});
    this.molByAtoms.prompts = {atoms: atomPrompt, mol: molePrompt};
    this.molByAtoms.resultPrompts = {
      atoms: "The resulting number of atoms / molecules is:",
      mol: "The resulting moles (mol) is:"
    };

    this.molgByAtoms = new FormulaInfo();
    this.molgByAtoms.formula = new Formula("(g * molg) = atoms * (6.02 * 10^23)", {g: null, atoms: null, molg: null});
    this.molgByAtoms.prompts = {g: massPrompt, atoms: atomPrompt, molg: amuPrompt};
    this.molgByAtoms.resultPrompts = {
      g: "The resulting mass (g) is:",
      atoms: "The resulting number of atoms / molecules is:",
      molg: "The resulting molar mass (mol / g) is:"
    };



    // Mass of a product
    this.massOfPR = new FormulaInfo();
    this.massOfPR.formula = (mgiven, gpmgiven, fracgiven, fracdesired, gpmdesired) => {return  (mgiven * fracdesired * gpmdesired) / (gpmgiven * fracgiven);};
    this.massOfPR.prompts = [
    "Enter the mass (g) of the given:",
    "Enter the grams per mole (g / mol) of the given",
    "Enter the given part of the ratio:",
    "Enter the desired part of the ratio:",
    "Enter the grams per mole (g / mol) of the desired:"];
    this.massOfPR.resultPrompt = "The resulting mass (g) of the desired is:";

    this.moleofPR = new FormulaInfo();
    this.moleofPR.formula = (mgiven, gpmgiven, fracgiven, fracdesired) => {return  (mgiven * fracdesired) / (gpmgiven * fracgiven);};
    this.moleofPR.prompts = [
    "Enter the mass (g) of the given:",
    "Enter the grams per mole (g / mol) of the given",
    "Enter the given part of the ratio:",
    "Enter the desired part of the ratio:"];
    this.moleofPR.resultPrompt = "The resulting moles (mol) of the desired is:";


    this.molarityByGram = new FormulaInfo();
    this.molarityByGram.formula = new Formula("molarity = (g / molg) / l", {molarity: null, g: null, molg: null, l: null});
    this.molarityByGram.prompts = {molarity: molarityPrompt, g: massPrompt, molg: amuPrompt, l: literPrompt};
    this.molarityByGram.resultPrompts = {
      molarity: "The molarity (mol / g) of the solution is:",
      g: "The mass (g) of the solute is:",
      molg: "The molar mass (g / mol) of the solute is:",
      l: "The liters (l) in this solution is:"
    };

    this.molarityByMol = new FormulaInfo();
    this.molarityByMol.formula = new Formula("molarity = mol / l", {molarity: null, mol: null, l: null});
    this.molarityByMol.prompts = {molarity: molarityPrompt, mol: molePrompt, l: literPrompt};
    this.molarityByMol.resultPrompts = {
      molarity: "The molarity (mol / L) of the solution is:",
      mol: "The moles (mol) in this solution is:",
      l: "The liters (l) in this solution is:"
    };


    this.molarityEqual = new FormulaInfo();
    this.molarityEqual.formula = new Formula("Mi * Vi = Mf * Vf", {Mi: null, Vi: null, Mf: null, Vf: null,});
    this.molarityEqual.prompts = {Mi: "Enter the initial molarity (mol / L)", Vi: "Enter the initial volume (mL):", Mf: "Enter the final molarity (mol / L)", Vf: "Enter the final volume (mL):"};
    this.molarityEqual.resultPrompts = {
      Mi: "The resulting initial molarity (mol / L) is:",
      Vi: "The resulting initial volume (mol / mL) is:",
      Mf: "The resulting final molarity (mol / L) is:",
      Vf: "The resulting final volume (mL) is:",
    };
  }
};
