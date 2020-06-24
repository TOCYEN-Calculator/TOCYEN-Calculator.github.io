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
   constructor(text, position = 0) {
     super(position);
     
     /**
      * The raw text of the element. Wrapped with
      * the text() setter and getter.
      */
     this.rawText = text;

     /**
      * The raw textSize of the element. Wrapped with
      * the textSize() setter and getter.
      */
     this.rawTextSize = textSize();

     // Talk to Aligner about it.
     Aligner.SetLastText(text, this.rawPosition.x, this.rawPosition.y);
   }

   /**
    * Getter for the text.
    *
    * @return {string} The text of the element.
    */
   get text() {
     return this.rawText;
   }

   /**
    * Setter for the text. Safely sets the value of the text shown and screen
    * and shows debugging information.
    *
    * @param {string} val - The value trying to be set. Hopefully it's a string!
    */
   set text(val) {
     if(typeof val == 'string') {
       this.rawText = val;
     }
     else {
       print(`TextElement.js: Could not set text as \"${val}\".`);
     }
   }

   /**
    * Getter for the text's size.
    *
    * @return {number} The text size of the element.
    */
   get textSize() {
     return this.rawTextSize;
   }

   /**
    * Setter for the text's size. Safely sets the value of the text size and screen
    * and shows debugging information.
    *
    * @param {number} val - The value trying to be set. Hopefully it's a number!
    */
   set textSize (val) {
     if(typeof val == 'number') {
       this.rawTextSize = val;
     }
     else {
       print(`TextElement.js: Could not set textSize as \"${val}\".`);
     }
   }

   /**
    * Renders the text element in its intended format and position.
    */
   RenderText() {
     textSize(this.textSize);
     text(this.text, this.position.x, this.position.y);
   }

   /**
    * Renders the text element in its intended format and position.
    */
   Render() {
     this.RenderText();
   }
 }
