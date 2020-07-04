class Formula {
  constructor(formula) {
    this.formula = formula;
  }

  SetValues(values) {
    var filteredValues = {};

    for(var key in values) {
      var value = values[key];

      if(value != null) {
        filteredValues[key] = value;
      }
    }

    this.formula = nerdamer(this.formula, filteredValues).text();
  }

  SolveFor(variable) {
    var answer = nerdamer.solveEquations(this.formula, variable).toString();
    if(answer == "") {
      print("Formula.js: Couldn\'t solve formula! Make sure the variable you\'re solving for is null!");
    }
    return nerdamer.solveEquations(this.formula, variable).toString();
  }
}
