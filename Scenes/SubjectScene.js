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

    this.buttons.push(new Button("Physics", createVector(0,-30)));
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