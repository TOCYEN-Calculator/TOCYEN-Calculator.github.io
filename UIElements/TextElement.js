/**
 * A class dedicated to the positioning and formatting of a piece of text.
 * @class
 */
 class TextElement extends Element {
   /**
    * Constructs a text element. Text size can be set using textSize(vw),
    * and cannot be changed upon creation.
    *
    * @param  {string} text   The text you want to display.
    * @param  {Vector | null | Number} position A p5 Vector representing the relative position of the text element.
    */
   constructor(text, position) {
     super(createDiv(text), position);

     /**
      * The raw text of the element.
      */
     this.rawText = text;

     this.pElement.class('text');
     this.pElement.style('font-size', `${textSize()}vw`);
     this.RefreshElement();

     if(position == null) {
       this.AlignWithLast();
     }


     // Talk to Aligner about it.
     Aligner.SetLastElement(this);
   }


   /**
    * Getter for the text. Returns the current text of the element.
    *
    * @return {string}  A strign representing the current text.
    */
   get text() {
     return this.rawText;
   }


   /**
    * Setter for the text. Changes will be visible to the element.
    *
    * @param  {string} value The assigned value of the text. Will print an error
    * if it's not a string.
    */
   set text(value) {
     if(typeof value == 'string') {
       this.rawText = value;
       this.pElement.html(value);
       this.RefreshElement();
     }
     else {
       print(`TextElement.js: \"${value}\" is not a valid string for setting the text.`);
     }
   }
 }
