
class ArgumentScene extends Scene {
  constructor() {
    super();


    /**
     * A key representing the variable of the current prompt.
     */
    this.currentPrompt = "";

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(3);
    this.prompt = new TextElement("", createVector(0, 100));

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    this.input = new InputElement("12345689", createVector(0,0));

    this.backButton = CreateBackButton("TestScene");

    this.elements.push(this.prompt);
    this.elements.push(this.input);
    this.elements.push(this.backButton);

    this.onEnter.AddListener(() => print("ArgumentScene loaded"));
    this.onEnter.AddListener(() => {
      this.GetNextPrompt();
      this.ShowCurrentPrompt();
    });
    this.input.onReturn.AddListener(() => {
      if(!this.IsFinished()) {
        this.CollectArgument();
      }

      // After collecting the argument, the scene might be done.
      if(!this.IsFinished()) {
        this.GetNextPrompt();
        this.ShowCurrentPrompt();
      }
      else {
        print('ArgumentScene.js: Done!');
        // When it's done, write changes, and go back to formula scene.

        this.Reset();
        SceneManager.ToScene("FormulaScene");
      }
    });
    this.backButton.onClick.AddListener(() => { this.Reset(); });
  }

  IsFinished() {
    var argumentsNeeded = FormulaTemplate.currentTemplate.formula.ArgumentsNeeded();
    var args = FormulaTemplate.args;
    return Object.keys(args).length >= argumentsNeeded;
  }

  CollectArgument() {
    var args = FormulaTemplate.args;
    args[this.currentPrompt] = this.input.text;
    this.input.text = "";
  }

  GetNextPrompt() {
    var variableToSolve = FormulaTemplate.currentTemplate.variable;
    var prompts = FormulaTemplate.currentTemplate.prompts;
    var args = FormulaTemplate.args;

    for(var key in prompts) {
      var alreadyCollected = key in args;

      if(key != variableToSolve && !alreadyCollected) {
        this.currentPrompt = key;
        break;
      }
    }
  }

  ShowCurrentPrompt() {
    var prompts = FormulaTemplate.currentTemplate.prompts;

    if(this.currentPrompt in prompts) {
      this.prompt.text = prompts[this.currentPrompt];
    }
    else {
      this.prompt.text = "Prompt Goes Here";
    }
  }

  Reset() {
    this.input.text = "";
    this.currentPrompt = "";
    FormulaTemplate.args = {};
  }
}
