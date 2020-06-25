/**
 * Handles the menu scene.
*/
class MenuScene extends Scene {
  constructor() {
    super();

    TextSize(50);
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    this.elements = [
      CreateSceneButton("Calculate", "SubjectScene", createVector(0,0))
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    TextSize(100);
    this.elements.push(new TextElement("TOCYEN", createVector(0, 100)));

    TextSize(30);
    this.elements.push(new TextElement("The Only Calculator You\'ll Ever Need!"));

    Aligner.SetReference(Aligner.REFERENCE.BOTTOMRIGHT);
    TextSize(30);
    this.elements.push(new TextElement("By Diego C", createVector(-100, -50)));
  }

};
