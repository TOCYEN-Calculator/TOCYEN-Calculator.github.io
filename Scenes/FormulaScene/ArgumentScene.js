
class ArgumentScene extends Scene {
  constructor() {
    super();


    /**
     * An integer representing the "index" of the current prompt.
     */
    this.currentPrompt = 0;

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(3);
    this.prompt = new TextElement("Prompt goes here", createVector(0, 100));

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    this.input = new InputElement("12345689", createVector(0,0));

    this.backButton = CreateBackButton("TestScene");

    this.elements.push(this.prompt);
    this.elements.push(this.input);
    this.elements.push(this.backButton);

    this.onEnter.AddListener(() => {this.ShowCurrentPrompt();});
    this.input.onReturn.AddListener(() => { this.ShowCurrentPrompt(); });
    this.backButton.onClick.AddListener(() => { this.Reset(); });
    this.onEnter.AddListener(() => print("ArgumentScene loaded"));
  }

  ShowCurrentPrompt() {
    var prompts = FormulaTemplate.currentTemplate.prompts;
    var variable = FormulaTemplate.currentTemplate.variable;

    var index = 0;
    for(var key in prompts) {
      if(key != variable && this.currentPrompt == index) {
        this.prompt.text = FormulaTemplate.currentTemplate.prompts[key];
        break;
      }

      index++;
    }

  }

  Reset() {
    this.input.text = "";
  }
}
