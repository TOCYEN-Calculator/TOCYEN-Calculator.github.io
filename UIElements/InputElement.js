/**
 *  A wrapper dedicated to wrapping a html input element. Derives from Element.js.
 *
 * @class
 */
class InputElement extends Element {
  /**
   * Construct an input element.
   *
   * @param  {Vector} position A vector representing the relative position of the element.
   * No, you can't leave it blank!
   * @param  {string} filter   A string representing the characters that are allowed to be inputted.
   */
  constructor(position, filter) {
    super(createInput(''), position);

    /**
     * A string representing the characters that are allowed to be inputted.
     */
    this.filter = filter;


    /**
     * An event called whenever the user pressed RETURN / ENTER.
     */
    this.onReturn = new Event();

    this.pElement.center();
    this.pElement.id('input');
    this.pElement.input((value) => this.AddKey(value));
    this.RefreshElement();

    // Listen to RETURN / ENTER events.
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

  GetResult() {
    return parseFloat(this.text);
  }


  AddKey(inputEvent) {
    var character = inputEvent.data;
    // Delete Event received.
    if(!this.filter.includes(character)) {
      this.text = this.text.substring(0, this.text.length - 1);
    }
  }

  Return() {
    if(keyCode == RETURN && !this.hidden) {
      this.onReturn.Call();
    }
  }
}
