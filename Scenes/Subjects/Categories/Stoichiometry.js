/*
 * Scene responsible for showing the user stoichiometry related formulas.
 */
class Stoichiometry extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(50);
    this.elements = [
      CreateSceneButton("Molar Conversions", "MolarConversionsScene", createVector(0,-150)),
      CreateFormulaButton("Mass of a Product / Reactant", ChemistryFormulas.massOfPR, createVector(400,20)),
      CreateFormulaButton("Moles of a Product / Reactant", ChemistryFormulas.moleofPR),
      CreateBackButton("ChemistryScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(100);
    this.elements.push(new TextElement('Select a subject:', createVector(0, 100)));
  }
}
