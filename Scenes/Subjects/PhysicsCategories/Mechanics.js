/**
 * Scene responsible for showing the user physics-mechanics related formulas.
 */
 class Mechanics extends Scene {
   constructor() {
     super();

     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     textSize(50);
     this.elements = [
       CreateSceneButton("Kinetic Energy", "KineticEnergyScene", createVector(200,-150)),
       CreateRightPageButton(() => this.ToPage(1)),
       CreateBackButton("PhysicsScene")
     ];

     Aligner.SetReference(Aligner.REFERENCE.TOP);
     textSize(100);
     this.elements.push(new TextElement('Select a formula:', createVector(0, 100)));

     FormulaImages.OnImage("Physics2.jpg", (image) => {
       Aligner.SetReference(Aligner.REFERENCE.CENTER);
       var imageElement = new ImageElement(image, createVector(-200,-150));
       imageElement.SetScrRect(148,870,150,70);
       imageElement.Scale(2);
       this.elements.push(imageElement);
     });











     this.NewPage();
     Aligner.SetReference(Aligner.REFERENCE.TOP);
     textSize(100);
     this.elements.push(new TextElement('Select a formula:', createVector(0, 100)));

     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     textSize(50);
     this.elements = [
       CreateFormulaButton("F = m * a", PhysicsFormulas.newtonSecondF, createVector(200,-180)),
       CreateFormulaButton("m = F / a", PhysicsFormulas.newtonSecondM),
       CreateLeftPageButton(() => this.ToPage(0)),
       CreateBackButton("PhysicsScene")
     ];

     this.SavePage();
     this.ToPage(0);
   }
 }
