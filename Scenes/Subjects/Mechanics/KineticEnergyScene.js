/*
 * Scene responsible for showing the user physics-mechanics related formulas.
 */
 class KineticEnergyScene extends Scene {
   constructor() {
     super();

     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     Scaler.TextSize(50);
     this.elements = [
       CreateFormulaButton("K", PhysicsFormulas.kineticEnergyK, createVector(0,30)),
       CreateFormulaButton("m", PhysicsFormulas.kineticEnergyM),
       CreateFormulaButton("v", PhysicsFormulas.kineticEnergyV),
       CreateFormulaButton("v (initial)", PhysicsFormulas.kineticEnergyVI),
       CreateFormulaButton("v (final)", PhysicsFormulas.kineticEnergyVF),
       CreateBackButton("Mechanics")
     ];

     Aligner.SetReference(Aligner.REFERENCE.TOP);
     Scaler.TextSize(50);
     this.elements.push(new TextElement('Select a variable to solve for:', createVector(0, 100)));

     FormulaImages.OnImage("Physics2.jpg", (image) => {
       Aligner.SetReference(Aligner.REFERENCE.CENTER);
       var imageElement = new ImageElement(image, createVector(0,-150));
       imageElement.SetScrRect(148,870,150,70);
       imageElement.Scale(3);
       this.elements.push(imageElement);
     });
   }
 }
