/**
 * Given a number of arguments, ask the user to input a float until all
 * arguments are given.
 */
class ArgumentFragment {
  constructor() {
    // Align the input to the center
    TextSize(50);
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    this.input = new InputElement(createVector(0,0), "0123456789.-e");
    this.input.onReturn.AddListener(() => this.ToNextPrompt());

    this.argumentsNeeded = 0;
    this.currentPromptID = 0;
    this.prompts = [];
    this.arguments = [];

    TextSize(50);
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    this.promptElement = new TextElement("", createVector(0, 100));

    this.backButton = CreateBackButton("SubjectScene");

    this.onFinished = new Event();
  }

  Render() {
    if(this.HasEnoughArguments()) {
      if(!this.AllArgumentsCollected()) {
        // Render current prompt
        this.promptElement.text = this.prompts[this.currentPromptID];
        this.promptElement.Render();

        // Get user input.
        this.input.Render();
        this.backButton.Render();
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
    this.promptElement.text = "";
  }

  ToNextPrompt() {
    // Save user input.
    this.arguments.push(parseFloat(this.input.GetResult()));

    // Reset input.
    this.input.Reset();
    this.input.SetActive(true);
    this.currentPromptID++;

    if(this.AllArgumentsCollected()) {
      this.onFinished.Call();
    }
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
    return this.arguments.slice();
  }
}
