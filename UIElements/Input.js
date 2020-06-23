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
     * A string of characters that are allowed to be inputted.
     */
    this.filter = filter;

    /**
     * Whether or not the input field should receive input events. (default: false)
     */
    this.active = false;

    /**
     * TextElement("", position) class.
     */
    this.textElement = new TextElement("", position);

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
    this.textElement.text = "";
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
    return parseFloat(this.textElement.text);
  }

  /**
   * A function that adds characters to the input field when a input event is received.
   */
  AddKey() {
    if(this.active) {
      // Check if ENTER was pressed && text exists.
      if(keyCode == ENTER && this.textElement.text.length > 0) {
        this.onReturn.Call();
      }
      else if (this.filter.includes(key)) {
        this.textElement.text += key;
      }
    }
  }

  /**
   * A function that deletes characters when a special input event is received.
   */
  DeleteKey() {
    if(this.active) {
      if(keyCode == BACKSPACE) {
        this.textElement.text = this.textElement.text.substring(0, this.textElement.text.length - 1);
      }
    }
  }

  /**
   * Renders the input field's text.
   */
  Render() {
    this.textElement.Render();
  }
}
