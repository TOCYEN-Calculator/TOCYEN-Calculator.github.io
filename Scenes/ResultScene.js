/**
 * Given a float, display the number to the user.
 */
class ResultScene {
  constructor() {
    this.result = 0;
    this.resultPrompt = "Placeholder";
    this.previousScene = "SubjectScene";

    Aligner.SetReference(Aligner.REFERENCE.BOTTOMLEFT);
    textSize(50);
    this.backButton = new Button("Back", createVector(100, -100));
    this.backButton.onClick.AddListener(() => SceneManager.ToScene(this.previousScene));
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
