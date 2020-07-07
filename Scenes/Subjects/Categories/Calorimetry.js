/*
 * Scene responsible for showing the user calorimetry related formulas.
 */
class Calorimetry extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(2);
    this.elements = [
      CreateSceneButton("Heat Change", "HeatChangeScene", createVector(200, -150)),
      CreateSceneButton("Heat Change", "HeatChangeScene", createVector(200, 150)),
      CreateBackButton("ChemistryScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(4);
    this.elements.push(new TextElement('Select a formula:', createVector(0, 100)));

    // Heat Change
    textSize(3.5);
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    var heatChange = new FormulaElement(String.raw`Q = mc \Delta T`, createVector(-300,-160));
    this.elements.push(heatChange);

    heatChange.AssignToFormula(0, ChemistryFormulas.heatChange, "q");
    heatChange.AssignToFormula(1, ChemistryFormulas.heatChange, "m");
    heatChange.AssignToFormula(2, ChemistryFormulas.heatChange, "c");
    heatChange.AssignToFormula(3, ChemistryFormulas.heatChange, "T");

    // Heat Change 2
    textSize(3.5);
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    var heatChange = new FormulaElement(String.raw`Q = mc(T_i - T_f)`, createVector(-300,160));
    this.elements.push(heatChange);

    heatChange.AssignToFormula(0, ChemistryFormulas.heatChange2, "q");
    heatChange.AssignToFormula(1, ChemistryFormulas.heatChange2, "m");
    heatChange.AssignToFormula(2, ChemistryFormulas.heatChange2, "c");
    heatChange.AssignToFormula(3, ChemistryFormulas.heatChange2, "Ti", true);
    heatChange.AssignToFormula(5, ChemistryFormulas.heatChange2, "Tf", true);

    print(heatChange.elements);
  }
}
