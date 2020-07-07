/*
 * Scene responsible for showing the user physics-mechanics related formulas.
 */
 class Mechanics extends Scene {
   constructor() {
     super();

     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     Scaler.TextSize(2);
     this.elements = [
       CreateSceneButton("Kinetic Energy", "KineticEnergyScene", createVector(200,-150)),
       CreateSceneButton("Newton\'s Second Law", "NewtonSecondScene", createVector(300,70)),
       CreateBackButton("PhysicsScene")
     ];

     Aligner.SetReference(Aligner.REFERENCE.TOP);
     Scaler.TextSize(4);
     this.elements.push(new TextElement('Select a formula:', createVector(0, 100)));

     // Kinetic Energy
     textSize(3.5);
     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     var kineticEnergy = new FormulaElement(String.raw`KE = \frac{1}{2} m {v}^{2}`, createVector(-300,-160));

     // KE
     var KEelement = kineticEnergy.elements[0].parentElement;
     KEelement.setAttribute('class', KEelement.getAttribute('class') + ' formulaElementVariable');
     KEelement.onclick = () => {
       FormulaTemplate.LoadTemplate(PhysicsFormulas.kineticEnergy, "KE");
       SceneManager.ToScene("FormulaScene")
     };


     this.elements.push(kineticEnergy);

     // Newton's Second Law
     textSize(3.5);
     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     var newtonSecond = new FormulaElement(String.raw`F = m \cdot a`, createVector(-300,50));

     this.elements.push(newtonSecond);
   }
 }
