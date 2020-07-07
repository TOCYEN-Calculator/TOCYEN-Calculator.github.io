/*
 * Handles the menu scene.
*/
class MenuScene extends Scene {
  constructor() {
    super();

    Scaler.TextSize(4);
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    this.elements = [
      CreateSceneButton("Calculate", "SubjectScene", createVector(0,0))
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(4);
    this.elements.push(new TextElement("TOCYEN", createVector(0, 100)));

    Scaler.TextSize(2);
    this.elements.push(new TextElement("The Only Calculator You\'ll Ever Need!"));

    Aligner.SetReference(Aligner.REFERENCE.BOTTOMRIGHT);
    Scaler.TextSize(2);
    this.elements.push(new TextElement("By Diego C", createVector(-150, -80)));
  }

};
