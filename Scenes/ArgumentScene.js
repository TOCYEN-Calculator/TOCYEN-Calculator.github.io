/**
 * Given a number of arguments, ask the user to input a float until all
 * arguments are given.
 */
class ArgumentScene {
  constructor() {
    // Align the input to the center
    textSize(50);
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    this.input = new Input(createVector(0,0));
    this.input.onReturn.AddListener(() => this.ToNextPrompt());

    this.previousScene = "SubjectScene";
    this.argumentsNeeded = 0;
    this.currentPromptID = 0;
    this.prompts = [];
    this.arguments = [];

    // Create back button
    textSize(50);
    Aligner.SetReference(Aligner.REFERENCE.BOTTOMLEFT);
    this.back = new Button("Back", createVector(100,-100));
    this.back.onClick.AddListener(() => SceneManager.ToScene(this.previousScene));
  }

  Render() {
    if(this.HasEnoughArguments()) {
      if(!this.AllArgumentsCollected()) {
        // Render current prompt
        textSize(50);
        Aligner.SetReference(Aligner.REFERENCE.TOP);
        Text(this.prompts[this.currentPromptID], 0, 100);

        // Get user input.
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

  Reset() {
    this.input.Reset();
    this.arguments = [];
    this.prompts = [];
    this.currentPromptID = 0;
  }

  ToNextPrompt() {
    // Save user input.
    this.arguments.push(parseFloat(this.input.GetResult()));
    print(parseFloat(this.input.GetResult()));

    // Reset input.
    this.input.Reset();
    this.input.SetActive(true);
    this.currentPromptID++;
  }

  SetPrompts(prompts) {
    this.prompts.splice(0, this.prompts.length);
    this.prompts = prompts;
  }

  SetArgumentsNeeded(argumentsNeeded) {
    this.argumentsNeeded = argumentsNeeded;
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
