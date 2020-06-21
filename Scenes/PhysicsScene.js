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
    newton.onClick.AddListener(() => FormulaTemplate.LoadTemplate(PhysicsFormulas.newtonSecondF));
    newton.onClick.AddListener(() => SceneManager.ToScene("FormulaScene"));
    this.buttons.push(newton);
  }

  Render() {
    // Draws buttons / menu when not inputing a field.
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(100);
    Text('Select a option:', 0, 100);

    for(var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].Render();
    }
  }

};
