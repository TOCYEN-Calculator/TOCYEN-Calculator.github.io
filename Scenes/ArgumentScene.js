
class ArgumentScene {
  constructor() {
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    /**
     * Input() class. Deals with getting floats from the user.
     * Reset() with a new prompt everytime a new argument is given.
     */
    this.input = new Input(createVector(0,0));
    this.input.SetActive(true);

    this.prompt = "Yessir";
    this.previousScene = 0;

    Aligner.SetReference(Aligner.REFERENCE.BOTTOMLEFT);
    this.back = new Button("Back", createVector(100,-100));
    this.back.onClick.AddListener(() => SceneManager.ToScene(this.previousScene));
  }

  Render() {
    textSize(50);
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Text(this.prompt, 0, 100);

    this.input.Render();
    this.back.Render();
  }

  SetPrompt(prompt) {
    this.prompt = prompt;
  }

  Reset() {
    this.input.Reset();
    this.prompt = "YesNope";
  }

  GetResult() {
    return this.input.GetResult();
  }

  SetActive(active) {
    this.input.SetActive(active);
  }

  AddResultListener(listener) {
    this.input.onReturn.AddListener(listener);
  }
}
