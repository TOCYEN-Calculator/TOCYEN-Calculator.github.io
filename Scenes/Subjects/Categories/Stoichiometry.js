/*
 * Scene responsible for showing the user stoichiometry related formulas.
 */
class Stoichiometry extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(2);
    this.elements = [
      new TextElement("Mol By Gram", createVector(250,-190)),
      new TextElement("Mol By Atoms", createVector(250,0)),
      CreateBackButton("ChemistryScene")
    ];

    // Mol By Atoms
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(4);
    var molByGramElement = new FormulaElement(String.raw`mol = \frac{g}{molg}`, createVector(-250,-200));
    this.elements.push(molByGramElement);

    molByGramElement.AssignToFormula(0, ChemistryFormulas.molByGram, "mol", true);
    molByGramElement.AssignToFormula(3, ChemistryFormulas.molByGram, "molg", true);
    molByGramElement.AssignToFormula(7, ChemistryFormulas.molByGram, "g");

    // Mol By Atoms
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(4);
    var molByAtomsElement = new FormulaElement(String.raw`\mathit{mol} = \frac{\# atoms}{6.02 \cdot 10^{23}}`, createVector(-250,0));
    this.elements.push(molByAtomsElement);

    molByAtomsElement.AssignToFormula(0, ChemistryFormulas.molByAtoms, "mol", true);
    molByAtomsElement.AssignToFormula(3, ChemistryFormulas.molByAtoms, "atoms", true);

    // Molg by atoms
    Scaler.TextSize(4);
    var molgByAtomsElement = new FormulaElement(String.raw`(g \cdot \mathit{\frac{mol}{g}}) = \frac{\# atoms}{6.02 \cdot 10^{23}}`, createVector(-250,200));
    this.elements.push(molgByAtomsElement);

    molgByAtomsElement.AssignToFormula(0, ChemistryFormulas.molgByAtoms, "g");
    molgByAtomsElement.AssignToFormula(1, ChemistryFormulas.molgByAtoms, "molg", 4);


    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(4);
    this.elements.push(new TextElement('Select a variable:', createVector(0, 100)));
  }
}
