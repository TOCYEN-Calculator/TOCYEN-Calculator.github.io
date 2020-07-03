/*
 * Deals with the choosing of a subject.
*/
class SubjectScene extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(50);

    this.elements = [
      CreateSceneButton("Physics (Work In Progress)", "PhysicsScene", createVector(0,-20)),
      CreateSceneButton("Chemistry", "ChemistryScene"),
      CreateBackButton("MenuScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(100);
    this.elements.push(new TextElement("Select a subject:", createVector(0, 100)));
  }
};
