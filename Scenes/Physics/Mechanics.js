/**
 * Scene responsible for showing the user physics-mechanics related formulas.
 *
 * @class
 */
 class Mechanics extends Scene {
   constructor() {
     super();

     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     textSize(50);
     this.elements = [
       CreateFormulaButton("F = m * a", PhysicsFormulas.newtonSecondF, createVector(0,0)),
       CreateFormulaButton("m = F / a", PhysicsFormulas.newtonSecondM),
       CreateBackButton("PhysicsScene")
     ];

     Aligner.SetReference(Aligner.REFERENCE.TOP);
     textSize(100);
     this.elements.push(new TextElement('Select a formula:', createVector(0, 100)));
   }
 }
