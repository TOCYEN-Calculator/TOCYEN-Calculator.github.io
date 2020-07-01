/**
 * An input field comprised entirely of text. Derives from TextElement.
 * @class
 */
class InputElement extends TextElement {
  /**
   * Constructs a new input field. Position and alignment will be saved.
   * @param {Vector | None | Number} position -
   * VECTOR: The relative position of the element's center on the canvas.
   * NONE: Automatically Aligner.GetNextPosition().
   * Number: The padding of Aligner.GetNextPosition().
   * @param {string} filter - Only allows characters in this string to be inputted.
   */
  constructor(position, filter) {
    super("", position);
    /**
     * A string of characters that are allowed to be inputted.
     */
    this.filter = filter;

    /**
     * Whether or not the input field should receive input events. (default: false)
     */
    this.active = false;

    /**
     * A event that is called whenever the input field catches an ENTER key press.
     */
    this.onReturn = new Event();

    this.inputField = createInput('');
    this.inputField.parent(windowDiv);
    this.inputField.size(Scaler.ScaleByWidth(1500), Scaler.ScaleByWidth(500));
    this.inputField.center();
    this.inputField.id('input');
    this.inputField.input((value) => this.AddKey(value));

    InputHandler.specialEvent.AddListener(() => this.Return());

    this.SetActive(false);
  }

  /**
   * Resets the text of the input field as well as set active to false.
   */
  Reset() {
    this.SetActive(false);
    this.text = "";
    this.inputField.value("");
  }

  /**
   * Changes whether or not the input field is accepting input.
   * @param {bool} active - Boolean representing whether this should accept input.
   */
  SetActive(active) {
    this.active = active;
    if(active) {
      this.inputField.show();
    }
    else {
      this.inputField.hide();
    }
  }

  /**
   * Gets the result of the input, as a float.
   * @return {float} The text of the input field, converted as a float.
   */
  GetResult() {
    return parseFloat(this.text);
  }

  /**
   * A function that adds characters to the input field when an input event is received.
   */
  AddKey(inputEvent) {
    var character = inputEvent.data;

    // Delete Event received.
    if(character == null) {
      this.text = this.text.substring(0, this.text.length - 1);
    }
    else if(this.filter.includes(character)) {
      this.text += character;
    }
    this.inputField.value(this.text);
  }

  Return() {
    if(keyCode == RETURN && this.active) {
      this.onReturn.Call();
    }
  }


  /**
   * Render absolutely nothing. The HTML input field renders itself!
   */
  Render() {

  }
}
