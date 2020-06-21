/**
 * A UI meant for solving formulas by asking the user for its required
 * variables.
 * @class
 */
 class FormulaUI {

   /**
    * Construct a new FormulaUI; Should be made for every formula in existence.
    *
    * @param  {functions} formula A function with any number of
    * integer parameters. Should return the result.
    */
   constructor(formula) {
     /**
      * The function representing the formula. The number of parameters
      * are automatically counted, and throw an error until the correct amount of
      * arguments are added with AddArgument(). This function will be called once
      * all arguments are collected from the user.
      */
     this.formula = formula;

     /**
      * The number of arguments needed to fulfill the formula function.
      */
     this.requiredArguments = formula.length;

     /**
      * An array representing the arguments passed onto the formula function.
      * All items are floats, and get unpacked when calling the formula.
      */
     this.arguments = [];

     /**
      * An array representing the prompts given to the user for each argument
      * using strings. Index numbers represent the argument index they represent.
      */
     this.prompts = [];

     /**
      * A integer representing the current prompt shown to the user.
      * This is used in ProcessCurrentResult().
      */
     this.currentPromptID = 0;

     /**
      * The prompt that will show when the calculation is finished.
      * Can be set using SetResultPrompt().
      */
     this.resultPrompt = "Result:"

     /**
      * Input() class. Deals with getting floats from the user.
      * Reset() with a new prompt everytime a new argument is given.
      */
     this.input = new Input("This Should Not Appear");
     this.input.onReturn.AddListener(() => this.ProcessCurrentResult());
     this.input.SetActive(true);
   }

   /**
    * Called each time input returns a result. Stores that result
    * in arguments, and tried to move on to the next argument.
    */
   ProcessCurrentResult() {
     this.arguments.push(this.input.GetResult());
     this.currentPromptID++;

     if(this.currentPromptID <= this.prompts.length - 1) {
       this.input.Reset(this.prompts[this.currentPromptID]);
       this.input.SetActive(true);
     }
     else {
       this.input.SetActive(false);
     }
   }

   /**
    * Adds a prompt to it's respective argument. The correct number of
    * AddArgument()'s need to be called to match the number of arguments on
    * the formula function.
    *
    * @param {type} prompt A string representing the prompt shown
    * to the user when they reach this argument.
    */
   AddArgument(prompt) {
     if(this.prompts.length == 0) {
       this.input.SetPrompt(prompt);
     }
     this.prompts.push(prompt);
   }

   /**
    * Sets the prompt shown at the result.
    */
   SetResultPrompt(prompt) {
     this.resultPrompt = prompt;
   }

   /**
    * Returns whether or not there are enough arguments to match the formula
    * function's.
    *
    * @return {bool}  Whether or not there are enough prompts to fulfill
    * the formula function's arguments.
    */
   HasEnoughArguments() {
     return this.prompts.length == this.requiredArguments;
   }


   /**
    * Displays the result.
    */
   DisplayResult() {
     Aligner.SetReference(Aligner.REFERENCE.TOP);
     Text(this.resultPrompt, 0, 100);

     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     Text(str(this.formula(...this.arguments)), 0, 0);
   }

   /**
    * Renders the FormulaUI.
    */
   Render() {
     if(this.HasEnoughArguments()) {
       if(this.currentPromptID <= this.prompts.length - 1) {
         this.input.Render();
       }
       else {
         this.DisplayResult();
       }
     }
     else {
       print("FormulaUI.js: THERE\'S NOT ENOUGH ARGUMENTS!");
     }
   }

 }
