/**
 * An input field comprised entirely of text. Used for obtaining an integer
 * from the user.
 * @class
 */
class Input {
  /**
   * Constructs a new input field. Position and alignment will be saved.
   * @param {Vector} position - The relative position of the input field.
   */
  constructor(position) {
    this.active = false;
    this.text = "";
    this.position = Aligner.GetAbsolutePosition(position.x, position.y);
    this.textSize = textSize();

    this.onReturn = new Event();

    InputHandler.keyEvent.AddListener(() => this.AddKey());
    InputHandler.specialEvent.AddListener(() => this.DeleteKey());
  }

  /**
   * Completely resets the input field. Used to prevent accidental memory leaks.
   * This clears the current text, sets active to false, and clears prompt.
   * Listeners stay in tact.
   */
  Reset() {
    this.active = false;
    this.text = "";
  }

  /**
   * Changes whether or not the input field is accepting input.
   * @param {bool} active - Boolean representing whether this should accept input.
   */
  SetActive(active) {
    this.active = active;
  }

  /**
   * Gets the converted result of the input.
   * @return {float} The text of the input field, converted as a float.
   */
  GetResult() {
    return parseFloat(this.text);
  }

  /**
   * A function that adds numbers to the input field when a input event is received.
   */
  AddKey() {
    if(this.active) {
      // Check if ENTER was pressed
      if(keyCode == ENTER) {
        this.onReturn.Call();
      }
      else if ("0123456789.-e".includes(key)) {
        this.text += key;
      }
    }
  }

  /**
   * A function that deletes characters when a special input event is received.
   */
  DeleteKey() {
    if(this.active) {
      if(keyCode == BACKSPACE) {
        this.text = this.text.substring(0, this.text.length - 1);
      }
    }
  }

  /**
   * Renders the input field and it's prompt. Whether or not it accepts input
   * is up to SetActive().
   */
  Render() {
    textSize(this.textSize);
    Aligner.SetReference(Aligner.REFERENCE.TOPLEFT);
    Text("> " + this.text + " <", this.position.x, this.position.y);
  }



}
