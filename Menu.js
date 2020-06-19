/*
 * Menu.js
 *
 * Handles the menu scene.
*/

class Menu {
  constructor() {
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(50);
    this.button = new Button("Placeholder", 0, 0);
  }

  Render() {
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(100);
    Text('TOCYEN', 0, 100);

    textSize(30);
    Text('The Only Calculator You\'ll Ever Need!', 0, 170);

    Aligner.SetReference(Aligner.REFERENCE.BOTTOMRIGHT);
    textSize(30);
    Text('By Diego C', -100, -50);

    this.button.Render();
  }

};
