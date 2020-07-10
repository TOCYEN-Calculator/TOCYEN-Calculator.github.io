
class ResultScene extends Scene {
  constructor() {
    super();

    textSize(3);
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    this.prompt = new TextElement("ResultPromptHere", createVector(0,100));

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    this.result = new TextElement("ResultHere", createVector(0,0));

    this.backButton = CreateBackButton("TestScene");

    this.elements.push(this.result);
    this.elements.push(this.prompt);
    this.elements.push(this.backButton);

    this.onEnter.AddListener(() => {
      this.backButton.onClick.listeners[0] = () => {
        SceneManager.ToScene(FormulaLoader.currentFormula.previousScene);
      };

      var currentFormula = FormulaLoader.currentFormula;
      currentFormula.RefreshArgs();
      this.result.text = currentFormula.Solve();
      this.prompt.text = currentFormula.resultPrompts[currentFormula.variable];
    });
  }
}
