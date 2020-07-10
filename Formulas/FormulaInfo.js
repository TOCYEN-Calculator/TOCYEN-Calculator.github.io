/**
 * An information class that deals with sharing formula data between scenes.
 * Used in FormulaLoader.js and in the formula classes.
 *
 * @class
 */
class FormulaInfo {
  constructor() {
    this.formula = null;
    this.prompts = {};
    this.resultPrompts = {};
    this.args = {};
    this.variable = "";
  }

  RefreshArgs() {
    if(Object.keys(this.args).length == 0) {
      print(`FormulaInfo.js: Warning: No arguments have been set.`);
    }
    if(this.variable == "") {
      print(`FormulaInfo.js: Warning: The variable to solve for has not been set.`);
    }
    this.formula.SetValues(this.variable, this.args);
  }

  Solve() {
    return this.formula.Solve();
  }
}
