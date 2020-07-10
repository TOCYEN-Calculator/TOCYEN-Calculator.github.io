
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
    this.input = new InputElement("1234567890-e", createVector(0,0));

    this.backButton = CreateBackButton("TestScene");

    this.elements.push(this.prompt);
    this.elements.push(this.input);
    this.elements.push(this.backButton);

    this.onEnter.AddListener(() => {
      this.backButton.onClick.listeners[0] = () => {SceneManager.ToScene(SceneManager.previousScene);};
      FormulaLoader.currentFormula.previousScene = SceneManager.previousScene;

      // Whenever entered, reset data.
      this.Reset();
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
        SceneManager.ToScene("ResultScene");
      }
    });
    this.backButton.onClick.AddListener(() => { this.Reset(); });
  }

  IsFinished() {
    var argumentsNeeded = FormulaLoader.currentFormula.formula.ArgumentsNeeded();
    var args = FormulaLoader.currentFormula.args;
    return Object.keys(args).length >= argumentsNeeded;
  }

  CollectArgument() {
    var args = FormulaLoader.currentFormula.args;
    args[this.currentPrompt] = this.input.text;
    this.input.text = "";
  }

  GetNextPrompt() {
    var variableToSolve = FormulaLoader.currentFormula.variable;
    var prompts = FormulaLoader.currentFormula.prompts;
    var args = FormulaLoader.currentFormula.args;

    for(var key in prompts) {
      var alreadyCollected = key in args;

      if(key != variableToSolve && !alreadyCollected) {
        this.currentPrompt = key;
        break;
      }
    }
  }

  ShowCurrentPrompt() {
    var prompts = FormulaLoader.currentFormula.prompts;

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
    FormulaLoader.currentFormula.args = {};
  }
}
