/**
 * An input field comprised entirely of text. Derives from TextElement.
 * @class
 */
class InputElement extends Element {
  constructor(position, filter) {
    super(createInput(''), position);

    this.filter = filter;


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
