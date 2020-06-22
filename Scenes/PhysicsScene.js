/**
 * Scene for choosing physics equations.
 *
 * @class
*/
class PhysicsScene {
  constructor() {
    this.buttons = [];

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(50);

    this.CreateButton("F = m * a", PhysicsFormulas.newtonSecondF, createVector(0,0));
    this.CreateButton("m = F / a", PhysicsFormulas.newtonSecondM);
  }

  CreateButton(label, template, position) {
    var button = null;
    if(arguments.length == 2) {
      button = new Button(label);
    }
    else {
      button = new Button(label, position);
    }
    button.onClick.AddListener(() => FormulaTemplate.LoadTemplate(template));
    button.onClick.AddListener(() => SceneManager.ToScene("FormulaScene"));
    this.buttons.push(button);
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
