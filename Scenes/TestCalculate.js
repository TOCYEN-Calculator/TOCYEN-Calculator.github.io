/*
 * TestCalculate.js
 *
 * A test for calcualting stuff.
*/
class TestCalculate {
  constructor() {
    this.buttons = [];

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(50);

    this.buttons.push(new Button("+", createVector(0,0)));
    this.buttons.push(new Button("YES"));
    this.buttons.push(new Button("c"));
  }

  Render() {
    for(var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].Render();
    }
  }

};
