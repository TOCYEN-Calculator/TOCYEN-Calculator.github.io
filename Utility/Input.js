/**
 * An input field comprised entirely of text; Guarentees the input of an integer.
 * @class
 */
class Input {

  constructor(prompt) {
    this.prompt = prompt;
    this.active = false;
    this.text = "";

    this.onReturn = new Event();

    InputHandler.keyEvent.AddListener(() => this.AddKey());
    InputHandler.specialEvent.AddListener(() => this.DeleteKey());
  }

  SetPrompt(prompt) {
    this.prompt = prompt;
  }

  SetActive(active) {
    this.active = active;
  }

  GetResult() {
    return parseFloat(this.text);
  }

  AddKey() {
    if(this.active) {
      // Check if ENTER was pressed
      if(keyCode == ENTER) {
        this.onReturn.Call();
      }
      else if ("0123456789.".includes(key)) {
        this.text += key;
      }
    }
  }

  DeleteKey() {
    if(this.active) {
      if(keyCode == BACKSPACE) {
        this.text = this.text.substring(0, this.text.length - 1);
      }
    }
  }

  Render() {
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Text("> " + this.text + " <", 0, 0);

    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Text(this.prompt, 0, 100);
  }



}
