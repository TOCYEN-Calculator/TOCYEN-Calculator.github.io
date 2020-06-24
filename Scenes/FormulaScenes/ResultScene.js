/**
 * Given a float, display it to the user.
 */
class ResultScene {
  constructor() {
    this.result = 0;
    this.resultPrompt = "YouShouldNotSeeThis";
    this.backButton = CreateBackButton("SubjectScene");
  }

  SetResultPrompt(prompt) {
    this.resultPrompt = prompt;
  }

  SetResult(result) {
    this.result = result;
  }

  Render() {
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(50);
    Text(this.resultPrompt, 0, 100);


    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(50);
    Text(str(this.result), 0, 0);
    this.backButton.Render();
  }
}
