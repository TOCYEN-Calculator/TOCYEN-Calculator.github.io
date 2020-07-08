/*
 * Scene responsible for showing the user molarity related formulas.
 */
class Molarity extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(2);
    this.elements = [
      new TextElement("Molarity With Grams", createVector(250, -200)),
      new TextElement("Molarity With Mol", createVector(250, 0)),
      new TextElement("Equal Molarity", createVector(250, 200)),

      CreateBackButton("ChemistryScene")
    ];


    // Molarity By Gram
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(4);
    var molarityByGramElement = new FormulaElement(String.raw`M = \frac{\frac{g}{molg}}{l}`, createVector(-250,-200));
    this.elements.push(molarityByGramElement);

    molarityByGramElement.AssignToFormula(0, ChemistryFormulas.molarityByGram, "molarity");
    molarityByGramElement.AssignToFormula(1, ChemistryFormulas.molarityByGram, "l");
    molarityByGramElement.AssignToFormula(2, ChemistryFormulas.molarityByGram, "molg", true);
    molarityByGramElement.AssignToFormula(6, ChemistryFormulas.molarityByGram, "g");

    // Molarity by Mol
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(4);
    var molarityByMolElement = new FormulaElement(String.raw`M = \frac{mol}{l}`, createVector(-250,0));
    this.elements.push(molarityByMolElement);

    molarityByMolElement.AssignToFormula(0, ChemistryFormulas.molarityByMol, "molarity");
    molarityByMolElement.AssignToFormula(1, ChemistryFormulas.molarityByMol, "l");
    molarityByMolElement.AssignToFormula(2, ChemistryFormulas.molarityByMol, "mol", true);


    // Equal Molarity
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(4);
    var molarityEqual = new FormulaElement(String.raw`M_i \cdot V_i = M_f \cdot V_f`, createVector(-350, 200));
    this.elements.push(molarityEqual);

    molarityEqual.AssignToFormula(0, ChemistryFormulas.molarityEqual, "Mi", true);
    molarityEqual.AssignToFormula(2, ChemistryFormulas.molarityEqual, "Vi", true);
    molarityEqual.AssignToFormula(4, ChemistryFormulas.molarityEqual, "Mf", true);
    molarityEqual.AssignToFormula(6, ChemistryFormulas.molarityEqual, "Vf", true);

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(4);
    this.elements.push(new TextElement('Choose a variable to solve for:', createVector(0, 100)));


  }
}
