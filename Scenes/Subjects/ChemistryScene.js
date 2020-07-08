/*
 * Scene for choosing physics equations.
*/
class ChemistryScene extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(2);
    this.elements = [
      CreateSceneButton("Calorimetry", "Calorimetry", createVector(0,0)),
      CreateSceneButton("Stoichiometry", "Stoichiometry"),
      CreateSceneButton("Molarity", "Molarity"),
      CreateBackButton("SubjectScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(4);
    this.elements.push(new TextElement('Select a category:', createVector(0, 100)));
  }
};
