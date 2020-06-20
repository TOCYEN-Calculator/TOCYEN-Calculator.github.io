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

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    var newton = new Button("Newtons Second Law", createVector(0,0));
    newton.onClick.AddListener(() => {this.inputOption = true;});
    this.buttons.push(newton);

    this.inputOption = false;

    this.input = new Input("Enter a value:");
    this.input.onReturn.AddListener(() => {this.inputOption = false;});
    this.input.onReturn.AddListener(() => print(this.input.GetResult()));
  }

  Render() {
    this.input.SetActive(this.inputOption);

    if(!this.inputOption) {
      Aligner.SetReference(Aligner.REFERENCE.TOP);
      textSize(100);
      Text('Select a option:', 0, 100);

      for(var i = 0; i < this.buttons.length; i++) {
        this.buttons[i].Render();
      }
    }
    else {
      this.input.Render();
    }
  }

};
