/**
 * Deals with the choosing of a subject.
*/
class SubjectScene extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(50);

    this.elements = [
      CreateSceneButton("Physics", "PhysicsScene", createVector(0,-30)),
      CreateSceneButton("Chemistry", "ChemistryScene"),
      CreateSceneButton("Misc", "PhysicsScene"),
      CreateBackButton("MenuScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(100);
    this.elements.push(new TextElement("Select a subject:", createVector(0, 100)));
  }
};
