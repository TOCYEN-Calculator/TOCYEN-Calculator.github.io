/*
 * Scene responsible for showing the user molarity related formulas.
 */
class Molarity extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(2);
    this.elements = [
      new TextElement("Solve with grams:", createVector(-350, 30)),


      new TextElement("Solve with moles:", createVector(350, 30)),

      CreateBackButton("ChemistryScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(4);
    this.elements.push(new TextElement('Choose a variable to solve for:', createVector(0, 100)));
  }
}
