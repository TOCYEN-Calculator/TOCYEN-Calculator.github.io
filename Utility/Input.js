/**
 * An input field comprised entirely of text.
 * @class
 */
class Input {
  
  constructor(prompt) {
    this.prompt = prompt;
    this.active = false;
    this.text = "";

    InputHandler.keyEvent.AddListener(() => this.AddKey());
  }

  SetActive(active) {
    this.active = active;
  }

  AddKey() {
    // Check if ENTER is pressed ("")
    if(key == "") {

    }
    else {
      this.text += key;
    }
  }

  Render() {
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Text("> " + this.text + " <", 0, 0);
  }



}
