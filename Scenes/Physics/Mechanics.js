/**
 * Scene responsible for showing the user physics-mechanics related formulas.
 *
 * @class
 */
 class Mechanics {
   constructor() {
     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     textSize(50);

     this.buttons = [
       CreateFormulaButton("F = m * a", PhysicsFormulas.newtonSecondF, createVector(0,0)),
       CreateFormulaButton("m = F / a", PhysicsFormulas.newtonSecondM),
       CreateBackButton("PhysicsScene")
     ];
   }

   Render() {
     // Draws buttons / menu when not inputing a field.
     Aligner.SetReference(Aligner.REFERENCE.TOP);
     textSize(100);
     Text('Select a formula:', 0, 100);

     for(var i = 0; i < this.buttons.length; i++) {
       this.buttons[i].Render();
     }
   }
 }
