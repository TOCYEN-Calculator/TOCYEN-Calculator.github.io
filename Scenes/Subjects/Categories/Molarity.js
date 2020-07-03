/*
 * Scene responsible for showing the user molarity related formulas.
 */
class Molarity extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(50);
    this.elements = [
      CreateFormulaButton("Molarity of a Gram", ChemistryFormulas.molarityOfGram, createVector(100, 0)),
      CreateBackButton("ChemistryScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    var molarity = new ImageElement('Molarity.PNG', createVector(-100,0));
    molarity.Scale(4);
    this.elements.push(molarity);

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(100);
    this.elements.push(new TextElement('Select a formula:', createVector(0, 100)));
  }
}
