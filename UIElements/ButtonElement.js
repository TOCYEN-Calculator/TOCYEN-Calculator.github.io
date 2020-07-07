
/**
 * A button comprised entirely of text. Derives from TextElement.
 * @class
 */
class ButtonElement extends Element {
  constructor(strText, position = 0) {
    super(createButton(strText), position);

    this.onClick = new Event();

    this.pElement.class('button');
    this.pElement.style('font-size', `${textSize()}vw`);
    this.pElement.elt.onclick = () => this.onClick.Call();
    this.RefreshElement();

    if(typeof position == 'number') {
      this.AlignWithLast(position);
    }

    // Tell Aligner this was the last constructed element.
    Aligner.SetLastElement(this);
  }
}
