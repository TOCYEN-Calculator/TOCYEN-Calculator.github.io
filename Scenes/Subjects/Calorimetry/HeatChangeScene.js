/*
 * Scene responsible for showing the formulas for the kinetic energy formula.
 */
class HeatChangeScene extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(50);
    this.elements = [
      CreateFormulaButton("Q", ChemistryFormulas.heatChangeQ, createVector(0, 0)),
      CreateFormulaButton("m", ChemistryFormulas.heatChangeM),
      CreateFormulaButton("c", ChemistryFormulas.heatChangeC),
      CreateFormulaButton("T", ChemistryFormulas.heatChangeT),
      CreateFormulaButton("T (initial)", ChemistryFormulas.heatChangeTI),
      CreateFormulaButton("T (final)", ChemistryFormulas.heatChangeTF),
      CreateBackButton("Calorimetry")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(50);
    this.elements.push(new TextElement('Select a variable to solve for:', createVector(0, 100)));

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    var imageElement = new ImageElement("HeatChange.jpg", createVector(0, -150));
    imageElement.Scale(3);
    this.elements.push(imageElement);
  }
}
