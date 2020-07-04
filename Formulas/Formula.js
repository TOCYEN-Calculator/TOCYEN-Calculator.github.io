/**
 *  Deals with solving a variable in a function using the nerdamer library.
 */
class Formula {
  /**
   * Construct a formula.
   *
   * @param  {string | nerdamer} formula   A string, or nerdamer object, that represents the formula.
   * @param  {dict} variables A dictionary representing the order of variables of the formula.
   */
  constructor(formula, variables) {
    this.rawFormula = formula;
    this.currentFormula = formula;

    if (typeof formula == 'object') {
      // Assume it's a nerdamer object. Seriously.
      this.rawFormula = formula.toString();
      this.currentFormula = formula.toString();
    }


    this.variable = "";
    this.variables = variables;
    this.map = [];
    for(var key in this.variables) {
      this.map.push(key);
    }

    this.valuesSet = false;
  }


  /**
   * Returns the amount of arguments needed to solve the formula with only 1 variable.
   *
   * @return {type}  description
   */
  ArgumentsNeeded() {
    return Object.keys(this.variables).length - 1;
  }


  /**
   * Sets the values of the formula.
   *
   * @param  {string} variable The variable to solve for.
   * @param  {number} args The arguments. Sets the values of this formula based on the order
   * of this.variables while ignoring the variable to be solved for.
   * Ex: formula = "F = m * a" SetVariableValues("m", 5, 6) will set the values
   * of F = "5" and a = "6", as it ignores the variable "m".
   */
  SetVariableValues(variable) {
    var filteredValues = {};
    var mapIndex = 0;
    for(var index = 1; index < arguments.length; index++) {
      var currentVariable = this.map[mapIndex];

      // Don't set the value of the variable in question.
      if(currentVariable == variable) {
        currentVariable = this.map[++mapIndex];
      }
      mapIndex++;

      var value = arguments[index];
      if(value != null) {
        filteredValues[currentVariable] = value;
      }
    }
    this.valuesSet = true;
    this.variable = variable;
    this.currentFormula = nerdamer(this.rawFormula, filteredValues).text();
  }


  /**
   * Tries to solve the formula with the variable to be solved for set by SetVariableValues().
   *
   * @return {string}  The raw result of nerdamer's result.
   */
  Solve() {
    var answer = nerdamer.solveEquations(this.currentFormula, this.variable).toString();
    if(answer == "") {
      print("Formula.js: Couldn\'t solve formula! Make sure the variable you\'re solving for is null!");
    }
    else if (!this.valuesSet) {
      print("Formula.js: Values have not been set! Stuff may look weird..");
    }
    
    // Convert the fraction into a decimal! (if necessary)
    var split = answer.split('/');
    if(split.length > 1) {
      answer = parseInt(split[0], 10) / parseInt(split[1], 10);
    }

    return answer;
  }
}
