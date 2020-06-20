/*
 * TestCalculate.js
 *
 * A test for calcualting stuff.
*/
class SubjectScene {
  constructor() {
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(50);

    this.buttons = [];

    var physics = new Button("Physics", createVector(0,-30));
    physics.AddListener(() => SceneManager.ToScene(2));

    this.buttons.push(physics);
    this.buttons.push(new Button("Chem"));
    this.buttons.push(new Button("Misc"));
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
