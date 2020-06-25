/**
 * Given a number of arguments, ask the user to input a float until all
 * arguments are given.
 *
 * @class
 */
class ArgumentFragment {

  /**
   * Construct the fragment. Call SetArgumentsNeeded() to set the
   * number of arguments.
   */
  constructor() {
    // Align the input to the center
    Scaler.TextSize(50);
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    this.input = new InputElement(createVector(0,0), "0123456789.-e");
    this.input.onReturn.AddListener(() => this.ToNextPrompt());

    this.argumentsNeeded = 0;
    this.currentPromptID = 0;
    this.prompts = [];
    this.arguments = [];

    Scaler.TextSize(50);
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    this.promptElement = new TextElement("", createVector(0, 100));

    this.backButton = CreateBackButton("SubjectScene");
    this.backButton.onClick.AddListener(() => this.Reset());

    this.onFinished = new Event();
  }


  /**
   * Renders the current prompt and updates the input field.
   * Will not display anything if there's not enough arguments given,
   * or if all the arguments were collected.
   */
  Render() {
    if(this.HasEnoughPrompts()) {
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


  /**
   * Resets the fragment. Called whenever youpress the back button.
   */
  Reset() {
    this.input.Reset();
    this.arguments = [];
    this.prompts = [];
    this.currentPromptID = 0;
    this.promptElement.text = "";
  }


  /**
   * Saves the current argument, then tries to go to the next
   * prompt. Called whenever the input field calls onReturn event.
   */
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


  /**
   * Sets the prompts shown on screen. The order of the
   * prompts in the array represent the order of the
   * arguments collected.
   *
   * @param {array} prompts An array of strings, representing prompts.
   */
  SetPrompts(prompts) {
    this.prompts.splice(0, this.prompts.length);
    this.prompts = prompts;
  }


  /**
   * Sets the arguments needed to be collected, and should be
   * called before rendering. This is used for throwing errors if the
   * incorrect number of prompts are given.
   *
   * @param {number} argumentsNeeded The amount of arguments needed.
   */
  SetArgumentsNeeded(argumentsNeeded) {
    if(typeof argumentsNeeded == 'number') {
      this.argumentsNeeded = argumentsNeeded;
    }
    else {
      print(`ArgumentFragment.js: Could not set \"${argumentsNeeded}\" as the amount of arguments needed.`);
    }
  }


  /**
   * Whether or not enough prompts were given.
   *
   * @return {bool}  Whether or not enough prompts were given.
   */
  HasEnoughPrompts() {
    return this.prompts.length == this.argumentsNeeded;
  }


  /**
   * Checks if all arguments were collected.
   *
   * @return {type}  Whether or not all arguments were collected.
   */
  AllArgumentsCollected() {
    return this.currentPromptID > this.prompts.length - 1;
  }

  /**
   * Returns a shallow copy of the arguments.
   */
  GetArguments() {
    return this.arguments.slice();
  }
}
