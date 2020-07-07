/*
 * Scene for choosing physics equations.
*/
class PhysicsScene extends Scene {
  constructor() {
    super()

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(2);
    this.elements = [
      CreateSceneButton("Mechanics", "Mechanics", createVector(0,0)),
      CreateBackButton("SubjectScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(4);
    this.elements.push(new TextElement('Select a category:', createVector(0, 100)));
  }
};
