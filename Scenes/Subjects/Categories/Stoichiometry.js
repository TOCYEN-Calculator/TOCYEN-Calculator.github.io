/*
 * Scene responsible for showing the user stoichiometry related formulas.
 */
class Stoichiometry extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(50);
    this.elements = [
      new ImageElement("AdvancedStoichiometric.PNG", createVector(-400,50)),
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

/*
 * Scene responsible for showing molar conversions.
 */
class MolarConversionsScene extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(50);
    this.elements = [
      CreateFormulaButton("Grams to Mole", ChemistryFormulas.molByGram, "mol", createVector(0, -150)),
      CreateBackButton("Stoichiometry")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(100);
    this.elements.push(new TextElement('Select a conversion:', createVector(0, 100)));
  }
}
