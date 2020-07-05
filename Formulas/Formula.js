/**
 *  Deals with solving a variable in a function using the nerdamer library.
 */
class Formula {
  /**
   * Construct a string-based formula.
   *
   * @param  {string} formula   A string that represents the formula. Should be parsable by
   * nerdamer.
   * @param  {dict} variables A dictionary representing the order of variables of the formula.
   */
  constructor(formula, variables) {
    if(formula == null) {
      print("Formula.js: A string formula was not entered.");
      formula = "";
    }
    if(variables == null) {
      print("Formula.js: No variables were assigned to the formula.");
      variables = {}
    }

    this.originalFormula = formula;
    this.currentFormula = formula;

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
    if(variable == null || typeof variable != 'string') {
      print("Formula.js: You must enter a variable to set it!");
    }
    else if(arguments.length - 1 != this.ArgumentsNeeded()) {
      print(`Formula.js: ${arguments.length - 1} argument(s) are not enough to be set. You need at least ${this.ArgumentsNeeded()}!`);
    }
    else {
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
      this.currentFormula = nerdamer(this.originalFormula, filteredValues).text();
    }
  }


  /**
   * Tries to solve the formula with the variable to be solved for set by SetVariableValues().
   *
   * @return {string}  The raw result of nerdamer's result.
   */
  Solve() {
    var solutions = [];
    if (!this.valuesSet) {
      print("Formula.js: Values have not been set! Stuff may look weird..");
    }
    try {
      // Array of possible solutions. This assumes that all other variables are defined.
      var arr = nerdamer.solveEquations(this.currentFormula, this.variable);

      // Evaluate each solution (i.e turn it into a fraction)
      var values = arr.toString().split(',');
      for(var index in values) {
        solutions.push(nerdamer(values[index]).evaluate().toString());
      }
    }
    catch(err) {
      print(`Formula.js: Couldn\'t solve formula! Error: ${err.message}`);
    }

    // Convert each fraction (if any) into a decimal.
    var answer = "";
    for(var index in solutions) {
      if(index > 0) {
        answer += ', ';
      }

      var split = solutions[index].split('/');
      if(split.length > 1) {
        answer += (parseInt(split[0], 10) / parseInt(split[1], 10)).toString();
      }
      else {
        answer += split[0];
      }
    }

    print(answer);
    return answer;
  }

  Katex() {
    return nerdamer.convertToLaTeX(this.originalFormula).toString();
  }
}
