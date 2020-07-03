/*
 * Scene responsible for showing the user physics-mechanics related formulas.
 */
 class Mechanics extends Scene {
   constructor() {
     super();

     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     Scaler.TextSize(50);
     this.elements = [
       CreateSceneButton("Kinetic Energy", "KineticEnergyScene", createVector(200,-150)),
       CreateSceneButton("Newton\'s Second Law", "NewtonSecondScene", createVector(300,70)),
       CreateRightPageButton(() => this.ToPage(1)),
       CreateBackButton("PhysicsScene")
     ];

     Aligner.SetReference(Aligner.REFERENCE.TOP);
     Scaler.TextSize(100);
     this.elements.push(new TextElement('Select a formula:', createVector(0, 100)));

     // Kinetic Energy
     FormulaImages.OnImage("Physics2.jpg", (image) => {
       Aligner.SetReference(Aligner.REFERENCE.CENTER);
       var imageElement = new ImageElement(image, createVector(-200,-150));
       imageElement.SetScrRect(148,870,150,70);
       imageElement.Scale(2);
       this.elements.push(imageElement);
     });

     // Newton's Second Law
     FormulaImages.OnImage("Physics2.jpg", (image) => {
       Aligner.SetReference(Aligner.REFERENCE.CENTER);
       var imageElement = new ImageElement(image, createVector(-280, 70));
       imageElement.SetScrRect(143,453,230,90);
       imageElement.Scale(2);
       this.elements.push(imageElement);
     });


     this.NewPage();
     Aligner.SetReference(Aligner.REFERENCE.TOP);
     Scaler.TextSize(100);
     this.elements.push(new TextElement('Select a formula:', createVector(0, 100)));

     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     Scaler.TextSize(50);
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


  /*
   * Scene responsible for showing the formulas for the kinetic energy formula.
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
