/*
 * Scene responsible for showing the user stoichiometry related formulas.
 */
class Stoichiometry extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(2);
    this.elements = [
      CreateSceneButton("Molar Conversions", "MolarConversionsScene", createVector(0,-150)),
      CreateBackButton("ChemistryScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(4);
    this.elements.push(new TextElement('Select a subject:', createVector(0, 100)));
  }
}
