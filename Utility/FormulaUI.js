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
     this.resultPrompt = "Result:";

     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     /**
      * Input() class. Deals with getting floats from the user.
      * Reset() with a new prompt everytime a new argument is given.
      */
     this.input = new ArgumentScene();
     this.input.AddResultListener(() => this.ProcessResult());
     this.input.SetActive(false);

     Aligner.SetReference(Aligner.REFERENCE.BOTTOMLEFT);
     textSize(50);
     this.backButton = new Button("Back", createVector(100,-100));
     this.backButton.onClick.AddListener(() => {this.back = true;});


     this.back = false;
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
     this.prompts.push(prompt);
   }

   /**
    * Sets the prompt shown at the result.
    */
   SetResultPrompt(prompt) {
     this.resultPrompt = prompt;
   }

   /**
    * Renders the FormulaUI.
    */
   Render() {
     if(this.HasEnoughArguments()) {
       // If done, deactivate.
       this.input.SetActive(!this.AllArgumentsCollected());

       if(!this.AllArgumentsCollected()) {
         this.DisplayCurrentPrompt();
       }
       else {
         this.DisplayResult();
       }

     }
     else {
       print("FormulaUI.js: THERE\'S NOT ENOUGH ARGUMENTS!");
     }
   }

   /**
    * Returns whether or not there are enough arguments to match the formula
    * function's.
    *
    * @return {bool}  Whether or not there are enough prompts to fulfill
    * the formula function's arguments.
    */
   HasEnoughArguments() {
     return this.prompts.length == this.formula.length;
   }

   /**
    * Returns whether or not all arguments were collected.
    *
    * @return {bool} Whether or not all arguments were collected.
    */
   AllArgumentsCollected() {
     return this.currentPromptID > this.prompts.length - 1;
   }

   /**
    * Called each time input returns a result. Stores that result
    * in arguments, and tries to move on to the next argument.
    */
   ProcessResult() {
     // Push the current result to arguments
     this.arguments.push(this.input.GetResult());

     // Try to go to the next prompt, if any.
     this.currentPromptID++;

     // Reset input for next prompt.
     this.input.Reset();
   }

   /**
    * Displays current prompt.
    */
   DisplayCurrentPrompt() {
     this.input.SetPrompt(this.prompts[this.currentPromptID]);
     this.input.Render();
   }


   /**
    * Displays the result.
    */
   DisplayResult() {
     textSize(50);
     Aligner.SetReference(Aligner.REFERENCE.TOP);
     Text(this.resultPrompt, 0, 100);

     // Unpack arguments and put them into formula function
     Aligner.SetReference(Aligner.REFERENCE.CENTER);
     Text(str(this.formula(...this.arguments)), 0, 0);
   }

 }
