/*
 * Test.. stuff.
*/
class TestScene extends Scene {
  constructor() {
    super();
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(4);
    this.elements.push(new TextElement("TEST", createVector(0, 100)));
    this.elements.push(new TextElement("TEST2"));


    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(4);
    this.elements.push(CreateFormulaButton("KE", PhysicsFormulas.kineticEnergy, "KE", createVector(0,0)));
    this.elements.push(CreateFormulaButton("m", PhysicsFormulas.kineticEnergy, "m"));
    this.elements.push(CreateFormulaButton("v", PhysicsFormulas.kineticEnergy, "v"));
  }

};
