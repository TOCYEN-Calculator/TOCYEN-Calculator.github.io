/**
 * An input field comprised entirely of text; Guarentees the input of an integer.
 * @class
 */
class Input {

  constructor(prompt) {
    this.prompt = prompt;
    this.active = false;
    this.text = "";

    InputHandler.keyEvent.AddListener(() => this.AddKey());
    InputHandler.specialEvent.AddListener(() => this.DeleteKey());
  }

  SetActive(active) {
    this.active = active;
  }

  AddKey() {
    print(keyCode);
    // Check if ENTER was pressed
    if(keyCode == ENTER) {
      this.text = "";
    }
    else if ("0123456789.".includes(key)) {
      this.text += key;
    }
  }

  DeleteKey() {
    if(keyCode == BACKSPACE) {
      this.text = this.text.substring(0, this.text.length - 1);
    }
  }

  Render() {
    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Text("> " + this.text + " <", 0, 0);
  }



}
