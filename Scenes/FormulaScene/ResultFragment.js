/**
 * Given a formula's result, present it to the user.
 */
class ResultFragment extends Scene {
  constructor() {
    super();
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(50);
    this.result = new TextElement("", createVector(0,0));

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    this.resultPrompt = new TextElement("YouShouldNotSeeThis", createVector(0, 100));

    this.backButton = CreateBackButton("SubjectScene");

    this.elements.push(this.result);
    this.elements.push(this.resultPrompt);
    this.elements.push(this.backButton);
  }

  SetResultPrompt(prompt) {
    this.resultPrompt.text = prompt;
  }

  SetResult(result) {
    this.result.text = str(result);
  }
}
