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
     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     var kineticEnergy = new FormulaElement(String.raw`KE = \frac{1}{2} m {v}^{2}`, createVector(-300,-160));
     kineticEnergy.SetFontSize(3.5);
     this.onLeave.AddListener(() => kineticEnergy.div.hide());
     this.onEnter.AddListener(() => kineticEnergy.div.show());

     // Newton's Second Law
     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     var newtonSecond = new FormulaElement("F = ma", createVector(-300,50));
     newtonSecond.SetFontSize(3.5);
     this.onLeave.AddListener(() => newtonSecond.div.hide());
     this.onEnter.AddListener(() => newtonSecond.div.show());


     this.NewPage();
     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     Scaler.TextSize(100);
     this.elements = [
       new TextElement("This is the next page.", createVector(0,0)),
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
        CreateFormulaButton("Force (F)", PhysicsFormulas.newtonSecond, "F", createVector(0,80)),
        CreateFormulaButton("Mass (m)", PhysicsFormulas.newtonSecond, "m", 30),
        CreateFormulaButton("Acceleration (a)", PhysicsFormulas.newtonSecond, "a", 30),
        CreateBackButton("Mechanics")
      ];

      Aligner.SetReference(Aligner.REFERENCE.TOP);
      Scaler.TextSize(50);
      this.elements.push(new TextElement('Select a variable to solve for:', createVector(0, 100)));

      // Newton's Second Law
      Aligner.SetReference(Aligner.REFERENCE.CENTER);
      var newtonSecond = new FormulaElement("F = ma", createVector(0,-150));
      newtonSecond.SetFontSize(7);
      this.onLeave.AddListener(() => newtonSecond.div.hide());
      this.onEnter.AddListener(() => newtonSecond.div.show());
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
         CreateFormulaButton("Kinetic Energy (K)", PhysicsFormulas.kineticEnergy, "KE", createVector(0,80)),
         CreateFormulaButton("Mass (m)", PhysicsFormulas.kineticEnergy, "m", 30),
         CreateFormulaButton("Velocity (v)", PhysicsFormulas.kineticEnergy, "v", 30),
         CreateBackButton("Mechanics")
       ];

       Aligner.SetReference(Aligner.REFERENCE.TOP);
       Scaler.TextSize(50);
       this.elements.push(new TextElement('Select a variable to solve for:', createVector(0, 100)));

       // Kinetic Energy
       Aligner.SetReference(Aligner.REFERENCE.CENTER);
       var kineticEnergy = new FormulaElement(String.raw`KE = \frac{1}{2} m {v}^{2}`, createVector(0,-150));
       kineticEnergy.SetFontSize(7);
       this.onLeave.AddListener(() => kineticEnergy.div.hide());
       this.onEnter.AddListener(() => kineticEnergy.div.show());
     }
   }
