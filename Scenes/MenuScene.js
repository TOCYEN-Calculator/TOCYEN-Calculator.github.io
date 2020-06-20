/*
 * Menu.js
 *
 * Handles the menu scene.
*/

class MenuScene {
  constructor() {
    textSize(50);
    Aligner.SetReference(Aligner.REFERENCE.CENTER);

    this.calculate = new Button("Calculate", createVector(0, 0));
    this.calculate.AddListener(() => SceneManager.ToScene(1));
  }

  Render() {
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(100);
    Text('TOCYEN', 0, 100);

    textSize(30);
    TextV('The Only Calculator You\'ll Ever Need!');

    Aligner.SetReference(Aligner.REFERENCE.BOTTOMRIGHT);
    textSize(30);
    Text('By Diego C', -100, -50);

    this.calculate.Render();
  }

};
