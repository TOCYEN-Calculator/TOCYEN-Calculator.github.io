/*
 * Scene responsible for showing the user calorimetry related formulas.
 */
class Calorimetry extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(50);
    this.elements = [
      CreateSceneButton("Heat Change", "HeatChangeScene", createVector(200, -150)),
      CreateBackButton("ChemistryScene")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(100);
    this.elements.push(new TextElement('Select a formula:', createVector(0, 100)));

    // Heat Change
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    var heatChange = new FormulaElement(String.raw`Q = mc \Delta T`, createVector(-300,-160));
    heatChange.SetFontSize(3.5);
    this.onLeave.AddListener(() => heatChange.div.hide());
    this.onEnter.AddListener(() => heatChange.div.show());
  }
}

/*
 * Scene responsible for showing the formulas for the kinetic energy formula.
 */
class HeatChangeScene extends Scene {
  constructor() {
    super();

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(50);
    this.elements = [
      CreateFormulaButton("Heat Capacity (Q)", ChemistryFormulas.heatChange, "q", createVector(0, 0)),
      CreateFormulaButton("Mass (m)", ChemistryFormulas.heatChange, "m"),
      CreateFormulaButton("Specific Heat Capacity (c)", ChemistryFormulas.heatChange, "c"),
      CreateFormulaButton("Change In Tempature (T)", ChemistryFormulas.heatChange, "T"),
      CreateFormulaButton("T (initial)", ChemistryFormulas.heatChange2, "Ti"),
      CreateFormulaButton("T (final)", ChemistryFormulas.heatChange2, "Tf"),
      CreateBackButton("Calorimetry")
    ];

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(50);
    this.elements.push(new TextElement('Select a variable to solve for:', createVector(0, 100)));

    // Heat Change
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    var heatChange = new FormulaElement(String.raw`Q = mc \Delta T`, createVector(0,-150));
    heatChange.SetFontSize(7);
    this.onLeave.AddListener(() => heatChange.div.hide());
    this.onEnter.AddListener(() => heatChange.div.show());
  }
}
