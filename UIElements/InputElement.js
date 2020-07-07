/**
 * An input field comprised entirely of text. Derives from TextElement.
 * @class
 */
class InputElement extends Element {
  /**
   * Constructs a new input field. Position and alignment will be saved.
   * @param {Vector | None | Number} position -
   * VECTOR: The relative position of the element's center on the canvas.
   * NONE: Automatically Aligner.GetNextPosition().
   * Number: The padding of Aligner.GetNextPosition().
   * @param {string} filter - Only allows characters in this string to be inputted.
   */
  constructor(position, filter) {
    super(createInput(''), position);
    /**
     * A string of characters that are allowed to be inputted.
     */
    this.filter = filter;

    /**
     * A event that is called whenever the input field catches an ENTER key press.
     */
    this.onReturn = new Event();

    this.pElement.size(Scaler.ScaleByWidth(1500), Scaler.ScaleByWidth(500));
    this.pElement.center();
    this.pElement.id('input');
    this.pElement.input((value) => this.AddKey(value));

    InputHandler.specialEvent.AddListener(() => this.Return());

    this.SetActive(false);
  }

  get text() {
    return this.pElement.value();
  }

  set text(value) {
    this.pElement.value(value);
  }

  Reset() {
    this.SetActive(false);
    this.text = "";
  }

  SetActive(active) {
    if(active) {
      this.Show();
    }
    else {
      this.Hide();
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
    print(character);
    // Delete Event received.
    if(!this.filter.includes(character) || this.text.length > 8) {
      this.text = this.text.substring(0, this.text.length - 1);
    }
  }

  Return() {
    if(keyCode == RETURN && !this.hidden) {
      this.onReturn.Call();
    }
  }
}
