/*
 * Scene responsible for showing the user calorimetry related formulas.
 */
class Calorimetry extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(50);
    this.elements = [
      CreateSceneButton("Heat Change", "HeatChangeScene", createVector(200, -150)),
      CreateBackButton("ChemistryScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(100);
    this.elements.push(new TextElement('Select a formula:', createVector(0, 100)));

    // Heat Change
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    var imageElement = new ImageElement("HeatChange.jpg", createVector(-200, -150));
    this.elements.push(imageElement);
  }
}

/*
 * Scene responsible for showing the formulas for the kinetic energy formula.
 */
class HeatChangeScene extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(50);
    this.elements = [
      CreateFormulaButton("Q", ChemistryFormulas.heatChange, "q", createVector(0, 0)),
      CreateFormulaButton("m", ChemistryFormulas.heatChange, "m"),
      CreateFormulaButton("c", ChemistryFormulas.heatChange, "c"),
      CreateFormulaButton("T", ChemistryFormulas.heatChange, "T"),
      CreateFormulaButton("T (initial)", ChemistryFormulas.heatChange2, "Ti"),
      CreateFormulaButton("T (final)", ChemistryFormulas.heatChange2, "Tf"),
      CreateBackButton("Calorimetry")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(50);
    this.elements.push(new TextElement('Select a variable to solve for:', createVector(0, 100)));

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    var imageElement = new ImageElement("HeatChange.jpg", createVector(0, -150));
    imageElement.Scale(2);
    this.elements.push(imageElement);
  }
}
