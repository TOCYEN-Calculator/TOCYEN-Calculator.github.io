/**
 * An input field comprised entirely of text. Derives from TextElement.
 * @class
 */
class InputElement extends TextElement{
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
      // Check if ENTER was pressed && text exists.
      if(keyCode == ENTER && this.text.length > 0) {
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
}
