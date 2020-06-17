/*
  Subjects.js
  
  The subjects of each calculation.
*/

class Subjects {
  constructor() {
    this.options = [
      "Calculate",
      "Options"
    ];
    
    Scaler.TextSize(5);
    Aligner.AlignMode(enumPositions.CENTER);
    this.buttons = [
      new Button(createVector(0,-120), "Physics"),
      new Button(Aligner.GetNextPosition(), "Chemistry")
    ];
  }
  
  Render() {
    Aligner.AlignMode(enumPositions.TOP);
    Scaler.TextSize(5);
    
    Aligner.Text("Click the subject:", createVector(0,150));
    
    for(var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].Render();
    }
  }

}