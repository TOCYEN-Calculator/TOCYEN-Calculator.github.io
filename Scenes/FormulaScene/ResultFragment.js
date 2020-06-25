/**
 * Given a formula's result, present it to the user. Derives from
 * Scene.
 *
 * @class
 */
class ResultFragment extends Scene {
  /**
   * Constructs the fragment. The derived Render() function
   * should be used for rendering.
   */
  constructor() {
    super();
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(50);
    this.result = new TextElement("ResultHere", createVector(0,0));

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    this.resultPrompt = new TextElement("ResultPrompt", createVector(0, 100));

    this.backButton = CreateBackButton("SubjectScene");

    this.elements.push(this.result);
    this.elements.push(this.resultPrompt);
    this.elements.push(this.backButton);
  }


  /**
   * Sets the result prompt.
   *
   * @param  {string} prompt The prompt.
   */
  SetResultPrompt(prompt) {
    if(typeof prompt == 'string') {
      this.resultPrompt.text = prompt;
    }
    else {
      print(`ResultFragment.js: Could not set \"${prompt}\" as the result prompt.`);
    }
  }

  /**
   * Sets the result shown.
   *
   * @param {string | number} result The result, as either a string or number.
   */
  SetResult(result) {
    this.result.text = str(result);
  }
}
