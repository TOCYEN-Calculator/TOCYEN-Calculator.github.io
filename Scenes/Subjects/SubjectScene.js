/*
 * Deals with the choosing of a subject.
*/
class SubjectScene extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(3);

    this.elements = [
      CreateSceneButton("AP Physics (Discontinued)", "PhysicsScene", createVector(0,-20)),
      CreateSceneButton("Chemistry", "ChemistryScene"),
      CreateBackButton("MenuScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(4);
    this.elements.push(new TextElement("Select a subject:", createVector(0, 100)));
  }
};
