/*
 * PhysicsScene.js
 *
 * Scene for physics stuff.
*/
class PhysicsScene {
  constructor() {
    this.buttons = [];

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(50);
    var newton = new Button("Newtons Second Law", createVector(0,0));
    newton.onClick.AddListener(() => {this.inputOption = true;});
    this.buttons.push(newton);

    this.inputOption = false;
  }

  Render() {
    if(!this.inputOption) {

      // Draws buttons / menu when not inputing a field.
      Aligner.SetReference(Aligner.REFERENCE.TOP);
      textSize(100);
      Text('Select a option:', 0, 100);

      for(var i = 0; i < this.buttons.length; i++) {
        this.buttons[i].Render();
      }

    }
    else {
      PhysicsFormulas.newtonSecondF.Render();
    }
  }

};
