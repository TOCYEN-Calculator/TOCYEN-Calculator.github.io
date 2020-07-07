/**
 * A class dedicated to the drawing, positioning, and formatting of a piece of text.
 * @class
 */
 class TextElement extends Element {
   /**
    * Constructs a new TextElement(). This sets Aligner's SetLastText().
    *
    * @param {string} text - The text shown.
    * @param {Vector | None | Number} position -
    * VECTOR: The relative position of the text's center on the canvas.
    * NONE: Automatically Aligner.GetNextPosition().
    * Number: The padding of Aligner.GetNextPosition().
    */
   constructor(text, position) {
     super(createDiv(text), position);

     /**
      * The raw text of the element. Wrapped with
      * the text() setter and getter.
      */
     this.rawText = text;
     this.pElement.class('text');
     this.pElement.style('font-size', `${textSize()}vw`);
     this.RefreshElement();

     // Talk to Aligner about it.
     Aligner.SetLastText(text, this.rawPosition.x, this.rawPosition.y);
   }
 }
