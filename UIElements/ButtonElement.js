
/**
 * A button comprised entirely of text. Derives from TextElement.
 * @class
 */
class ButtonElement extends Element {
  constructor(strText, position) {
    super(createButton(strText), position);

    this.onClick = new Event();

    this.pElement.class('button');
    this.pElement.style('font-size', `${textSize()}vw`);
    this.pElement.elt.onclick = () => this.onClick.Call();
    this.RefreshElement();
  }
}
