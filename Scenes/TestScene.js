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

    print(ChemistryFormulas.heatChange.formula.Katex());


    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(100);
    var formulaElement = new FormulaElement(String.raw`x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}`, createVector(0,-200));
    formulaElement.SetFontSize(10);
    this.onLeave.AddListener(() => formulaElement.div.hide());
    this.onEnter.AddListener(() => formulaElement.div.show());
  }

};
