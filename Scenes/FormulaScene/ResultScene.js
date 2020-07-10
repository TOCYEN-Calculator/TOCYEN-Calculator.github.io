
class ResultScene extends Scene {
  constructor() {
    super();

    textSize(3);
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    var prompt = new TextElement("ResultPromptHere", createVector(0,100));

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    var result = new TextElement("ResultHere", createVector(0,0));

    var backButton = CreateBackButton("TestScene");

    this.elements.push(result);
    this.elements.push(prompt);
    this.elements.push(backButton);

    this.onEnter.AddListener(() => {
      FormulaLoader.currentFormula.RefreshArgs();
      result.text = FormulaLoader.currentFormula.Solve();
      prompt.text = FormulaLoader.currentFormula.resultPrompts[FormulaLoader.currentFormula.variable];
    });
  }
}
