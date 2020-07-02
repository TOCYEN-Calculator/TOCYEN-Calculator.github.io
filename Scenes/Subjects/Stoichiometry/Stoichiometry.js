/*
 * Scene responsible for showing the user stoichiometry related formulas.
 */
class Stoichiometry extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(50);
    this.elements = [
      CreateSceneButton("Molar Conversions", "MolarConversionsScene", createVector(0,-30)),
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
      CreateFormulaButton("Grams to Mole", ChemistryFormulas.gramToMole, createVector(0, -150)),
      CreateFormulaButton("Grams to Atoms", ChemistryFormulas.gramToAtoms),
      CreateFormulaButton("Moles to Grams", ChemistryFormulas.molarMass),
      CreateFormulaButton("Moles to Atoms", ChemistryFormulas.moleToAtoms),
      CreateFormulaButton("Atoms to Moles", ChemistryFormulas.atomsToMole),
      CreateFormulaButton("Atoms to Grams", ChemistryFormulas.atomsToGram),
      CreateBackButton("ChemistryScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(100);
    this.elements.push(new TextElement('Select a conversion:', createVector(0, 100)));
  }
}
