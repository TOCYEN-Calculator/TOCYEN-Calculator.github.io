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
    imageElement.Scale(2);
    this.elements.push(imageElement);
  }
}
