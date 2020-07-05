/*
 * Test.. stuff.
*/
class TestScene extends Scene {
  constructor() {
    super();
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(100);
    this.elements.push(new TextElement("TEST", createVector(0, 100)));

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(100);
    this.elements.push(CreateFormulaButton("KE", PhysicsFormulas.kineticEnergy, "KE", createVector(0,0)));
    this.elements.push(CreateFormulaButton("m", PhysicsFormulas.kineticEnergy, "m"));
    this.elements.push(CreateFormulaButton("v", PhysicsFormulas.kineticEnergy, "v"));

    // Stress test

    var testFormula = new Formula("T = x^2 - y^2", {T: null, x: null, y:null});
    testFormula.SetVariableValues("x", 9, 3.4);
    testFormula.Solve();

    var formulaElement = new FormulaElement(String.raw`KE = \frac{1}{2} m {v}^{2}`, createVector(0,0));
    formulaElement.SetFontSize(1);
    this.onLeave.AddListener(() => formulaElement.div.hide());
    this.onEnter.AddListener(() => formulaElement.div.show());

    print(PhysicsFormulas.kineticEnergy.formula.Katex());
  }

};
