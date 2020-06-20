/*
 * PhysicsScene.js
 *
 * Scene for physics stuff.
*/
class PhysicsScene {
  constructor() {
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(50);

    this.buttons = [];
    this.input = new Input("Sup");
  }

  Render() {
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(100);
    Text('Select a boomer:', 0, 100);

    for(var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].Render();
    }
    this.input.Render();
  }

};
