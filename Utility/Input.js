/**
 * An input field comprised entirely of text.
 * @class
 */
class Input {
  /**
   * Constructs a new input field. Position and alignment will be saved.
   * @param {Vector} position - The relative position of the input field.
   * @param {string} filter - Only allows characters in this string to be inputted.
   */
  constructor(position, filter) {
    /**
     * A string of characaters that are allows to be inputted in the input field.
     */
    this.filter = filter;

    /**
     * Whether or not the input field should receive input events. (default: false)
     */
    this.active = false;

    /**
     * The current text inside the input field.
     */
    this.text = "";

    /**
     * The absolute position of the center of the input field represented
     * as a Vector.
     */
    this.position = Aligner.GetAbsolutePosition(position.x, position.y);

    /**
     * The text size of the input field during creation.
     */
    this.textSize = textSize();


    /**
     * A event that is called whenever the input field catches an ENTER key press.
     */
    this.onReturn = new Event();

    InputHandler.keyEvent.AddListener(() => this.AddKey());
    InputHandler.specialEvent.AddListener(() => this.DeleteKey());
  }

  /**
   * Resets the text of the input field as well as set active to false.
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
   * Gets the result of the input, as a float.
   * @return {float} The text of the input field, converted as a float.
   */
  GetResult() {
    return parseFloat(this.text);
  }

  /**
   * A function that adds characters to the input field when a input event is received.
   */
  AddKey() {
    if(this.active) {
      // Check if ENTER was pressed
      if(keyCode == ENTER) {
        this.onReturn.Call();
      }
      else if (this.filter.includes(key)) {
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
