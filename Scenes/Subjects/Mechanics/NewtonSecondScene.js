/*
 * Scene responsible for showing the formulas for Newton's Second Law.
 */
 class NewtonSecondScene extends Scene {
   constructor() {
     super();

     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     Scaler.TextSize(50);
     this.elements = [
       CreateFormulaButton("F", PhysicsFormulas.newtonSecondF, createVector(0,100)),
       CreateFormulaButton("m", PhysicsFormulas.newtonSecondM),
       CreateFormulaButton("a", PhysicsFormulas.newtonSecondA),
       CreateBackButton("Mechanics")
     ];

     Aligner.SetReference(Aligner.REFERENCE.TOP);
     Scaler.TextSize(50);
     this.elements.push(new TextElement('Select a variable to solve for:', createVector(0, 100)));

     FormulaImages.OnImage("Physics2.jpg", (image) => {
       Aligner.SetReference(Aligner.REFERENCE.CENTER);
       var imageElement = new ImageElement(image, createVector(0,-150));
       imageElement.SetScrRect(143,453,230,90);
       imageElement.Scale(3);
       this.elements.push(imageElement);
     });
   }
 }
