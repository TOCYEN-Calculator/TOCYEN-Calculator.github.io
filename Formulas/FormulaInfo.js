/**
 * Deals with the information regarding the UI portion of
 * solving formulas.
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

  SetValues(variable, values = {}) {
    this.formula.SetValues(variable, values);
  }

  Solve() {
    return this.formula.Solve();
  }
}
