/**
 * Given a number of arguments, ask the user to input a float until all
 * arguments are given.
 */
class ArgumentScene {
  constructor(argumentsNeeded) {
    // Align the input to the center.
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    this.input = new Input(createVector(0,0));
    this.input.SetActive(false);
    this.input.onReturn.AddListener(() => this.ToNextPrompt());

    this.argumentsNeeded = argumentsNeeded;
    this.currentPromptID = 0;
    this.prompts = [];
    this.arguments = [];
    this.previousScene = 0;

    textSize(50);
    Aligner.SetReference(Aligner.REFERENCE.BOTTOMLEFT);
    this.back = new Button("Back", createVector(100,-100));
    this.back.onClick.AddListener(() => SceneManager.ToScene(this.previousScene));
  }

  Render() {
    if(this.HasEnoughArguments()) {
      if(!this.AllArgumentsCollected()) {
        textSize(50);
        Aligner.SetReference(Aligner.REFERENCE.TOP);
        Text(this.prompts[this.currentPromptID], 0, 100);

        this.input.Render();
        this.back.Render();
      }
      else {
        print("ArgumentScene.js: Arguments have been collected. This should go to the next scene.");
      }
    }
    else {
      print("ArgumentScene.js: THERE IS NOT ENOUGH ARGUMENTS!");
    }
  }

  ToNextPrompt() {
    // Save user input.
    this.arguments.push(parseFloat(this.input.GetResult()));
    print(parseFloat(this.input.GetResult()));

    this.input.Reset();
    this.input.SetActive(true);
    this.currentPromptID++;
  }

  AddPrompt(prompt) {
    this.prompts.push(prompt);
  }

  HasEnoughArguments() {
    return this.prompts.length == this.argumentsNeeded;
  }

  AllArgumentsCollected() {
    return this.currentPromptID > this.prompts.length - 1;
  }

  GetArguments() {
    return arguments;
  }
}
