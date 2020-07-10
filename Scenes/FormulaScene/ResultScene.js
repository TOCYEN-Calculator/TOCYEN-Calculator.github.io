
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
      var currentFormula = FormulaLoader.currentFormula;
      currentFormula.RefreshArgs();
      result.text = currentFormula.Solve();
      prompt.text = currentFormula.resultPrompts[currentFormula.variable];
    });
  }
}
