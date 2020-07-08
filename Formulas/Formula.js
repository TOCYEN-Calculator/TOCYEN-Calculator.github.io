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

    /**
     * The original formula. Not a single variable is defined here!
     */
    this.originalFormula = formula;

    /**
     * The current formula. Only has 1 undefined variable.
     */
    this.currentFormula = formula;


    /**
     * The current variable to solve for.
     */
    this.variable = "";


    /**
     * A dictionary representing the variables in the formula.
     */
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
   * Sets the values of the formula, as well as the variable you want to solve for.
   *
   * @param  {string} variable The variable you want to solve for. If it doesn't
   * exist, it will print an error.
   * @param  {dict}   values Dictionary of the values of variables.
   * If it contains a variable not present in the variables listed
   * in the constructor, it will print out a warning.
   */
  SetValues(variable, values = {}) {
    if(variable == null || typeof variable != 'string') {
      print("Formula.js: You must enter a variable to set it!");
    }
    else if(typeof values != 'object') {
      print(`Formula.js: ${values} is not a dictionary.`);
    }
    else if(!(variable in this.variables)) {
      print(`Formula.js: ${variable} is not a valid variable in ${this.originalFormula}.`);
    }
    else {
      // Print debug information for undefined variables.
      for(var key in values) {
        if(!(key in this.variables)) {
          print(`Formula.js: Warning: \"${key}\" is not a valid variable in ${this.originalFormula}!`);
        }
      }

      this.valuesSet = true;
      this.variable = variable;
      this.currentFormula = nerdamer(this.originalFormula, values).text();
    }
  }


  /**
   * Tries to solve the formula for a variable with defined values. Both of
   * these can be set using SetValues().
   *
   * @return {string}  A string representing the solution. Fractions are
   * only calculated when no variables are present in the formula.
   */
  Solve() {
    var answer = "";
    if (!this.valuesSet) {
      print("Formula.js: Values have not been set! Stuff may look weird..");
    }

    // An array representing the simplified version of the solution(s)
    var solutions = nerdamer(this.currentFormula).solveFor(this.variable);
    solutions = solutions.toString().split(',');

    // Evaluate each simplified solution if it doesn't have variables.
    for(var index in solutions) {
      if(index > 0) {
        answer += ", ";
      }

      var strFrac = nerdamer(solutions[index]).evaluate().toString();
      var hasVariables = /[A-Z]/i.test(strFrac);

      if(!hasVariables) {
        answer += this.ToDecimal(strFrac);
      }
      else {
        answer += strFrac;
      }
    }
    return answer;
  }


  /**
   * Given a fraction as a string (e.g. "5/10"), turn it into
   * a decimal (e.g. 0.5).
   *
   * @param  {string} fraction A string representing a fraction. To spaces between
   * the number and the forward slash ("/").
   * @return {number} A float that's approximately equivalent to the fraction.
   */
  ToDecimal(fraction) {
    var answer = "";
    var radix = 10; // Standard Base 10
    var split = fraction.split('/');

    answer = parseInt(split[0], radix);

    if(split.length > 1) {
      answer /= parseInt(split[1], radix);
    }

    return answer.toString();
  }


  /**
   * Returns the KaTeX representation of the formula.
   *
   * @return {string} KaTeX representation of the formula.
   */
  Katex() {
    return nerdamer.convertToLaTeX(this.originalFormula).toString();
  }
}
