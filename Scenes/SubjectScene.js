/**
 * Deals with the choosing of a subject.
 *
 * @class
*/
class SubjectScene {
  constructor() {
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(50);

    this.buttons = [
      CreateSceneButton("Physics", "PhysicsScene", createVector(0,-30)),
      CreateSceneButton("Chemistry", "PhysicsScene"),
      CreateSceneButton("Misc", "PhysicsScene"),
      CreateBackButton("MenuScene")
    ];
  }

  Render() {
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(100);
    Text('Select a subject:', 0, 100);

    for(var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].Render();
    }
  }

};
