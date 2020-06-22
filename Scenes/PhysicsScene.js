/**
 * Scene for choosing physics equations.
 *
 * @class
*/
class PhysicsScene {
  constructor() {
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(50);

    this.buttons = [
      CreateSceneButton("Mechanics", "Mechanics", createVector(0,0)),
      CreateBackButton("SubjectScene")
    ];
  }

  Render() {
    // Draws buttons / menu when not inputing a field.
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(100);
    Text('Select a category:', 0, 100);

    for(var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].Render();
    }
  }

};
