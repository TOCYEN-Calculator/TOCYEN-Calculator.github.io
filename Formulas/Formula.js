class Formula {
  constructor(formula, variables) {
    this.formula = formula;
    this.variables = variables;
    this.map = [];
    for(var key in this.variables) {
      this.map.push(key);
    }

    this.valuesSet = false;
  }

  ArgumentsNeeded() {
    return Object.keys(this.variables).length - 1;
  }

  VariableInMap(variable) {
    for(var index in this.map) {
      if(this.map[index] == variable) {
        return index;
      }
    }
    return -1;
  }

  SetValues() {
    if(arguments.length == Object.keys(this.variables).length) {
      // Determine how the order of arguments get paired up with their variables.
      var filteredValues = {};

      for(var index in arguments) {
        var value = arguments[index];

        if(value != null) {
          filteredValues[this.map[index]] = value;
        }
      }

      this.formula = nerdamer(this.formula, filteredValues).text();
      this.valuesSet = true;
    }
    else {
      print('Formula.js: THERE IS NOT ENOUGH ARGUMENTS.')
    }
  }

  SolveFor(variable) {
    var answer = nerdamer.solveEquations(this.formula, variable).toString();
    if(answer == "") {
      print("Formula.js: Couldn\'t solve formula! Make sure the variable you\'re solving for is null!");
    }
    else if (!this.valuesSet) {
      print("Formula.js: Values have not been set! Stuff may look weird..");
    }
    return nerdamer.solveEquations(this.formula, variable).toString();
  }
}
