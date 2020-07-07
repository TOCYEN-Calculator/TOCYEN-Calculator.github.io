
/**
 * A button comprised entirely of text. Derives from TextElement.
 * @class
 */
class ButtonElement extends Element {
  /**
   * Create a button element.
   * @param {string} text - The text shown.
   * @param {Vector | None | Number} position -
   * VECTOR: The relative position of the element's center on the canvas.
   * NONE: Automatically Aligner.GetNextPosition().
   * Number: The padding of Aligner.GetNextPosition().
   */
  constructor(strText, position) {
    super(position);

    /**
     * An event called once if the button is pressed.
     */
    this.onClick = new Event();

    this.pElement = createButton(strText);
    this.pElement.class('button');
    this.pElement.position(this.position.x - this.pElement.elt.offsetWidth / 2, this.position.y - this.pElement.elt.offsetHeight / 2);
    this.pElement.elt.onclick = () => this.onClick.Call();
  }

  Render() {

  }


}
