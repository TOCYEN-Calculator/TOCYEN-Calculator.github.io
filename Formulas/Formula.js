class Formula {
  constructor(formula, variables) {
    this.rawFormula = formula;
    this.currentFormula = formula;
    this.variable = "";
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
    print(filteredValues);
    this.valuesSet = true;
    this.variable = variable;
    this.currentFormula = nerdamer(this.rawFormula, filteredValues).text();
  }

  Solve() {
    var answer = nerdamer.solveEquations(this.currentFormula, this.variable).toString();
    if(answer == "") {
      print("Formula.js: Couldn\'t solve formula! Make sure the variable you\'re solving for is null!");
    }
    else if (!this.valuesSet) {
      print("Formula.js: Values have not been set! Stuff may look weird..");
    }

    answer = `${this.variable} = ${answer}`;

    return answer;
  }
}
