/**
 * A class dedicated to the positioning and formatting of a piece of text.
 * @class
 */
 class TextElement extends Element {
   constructor(text, position) {
     super(createDiv(text), position);

     this.rawText = text;
     this.rawSize = textSize();
     this.pElement.class('text');
     this.pElement.style('font-size', `${textSize()}vw`);
     this.RefreshElement();

     // Talk to Aligner about it.
     Aligner.SetLastText(text, this.rawPosition.x, this.rawPosition.y);
   }

   get text() {
     return this.rawText;
   }

   set text(value) {
     this.rawText = value;
     this.pElement.html(value);
     this.RefreshElement();
   }

   get textSize() {
     return this.rawSize;
   }

   set textSize(value) {
     this.rawSize = value;
     this.pElement.style('font-size', `${textSize()}vw`);
     this.RefreshElement();
   }


 }
