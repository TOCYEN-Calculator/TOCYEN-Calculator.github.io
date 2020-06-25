/**
 * Scene for choosing physics equations.
*/
class PhysicsScene extends Scene {
  constructor() {
    super()

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    TextSize(50);
    this.elements = [
      CreateSceneButton("Mechanics", "Mechanics", createVector(0,0)),
      CreateBackButton("SubjectScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    TextSize(100);
    this.elements.push(new TextElement('Select a category:', createVector(0, 100)));
  }
};
