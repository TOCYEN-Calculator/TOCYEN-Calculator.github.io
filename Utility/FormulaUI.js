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

     this.argumentScene = new ArgumentScene(this.formula.length);
     this.argumentScene.input.SetActive(true);

     // Used for result.
     Aligner.SetReference(Aligner.REFERENCE.BOTTOMLEFT);
     textSize(50);
     this.backButton = new Button("Back", createVector(100,-100));
     this.backButton.onClick.AddListener(() => {this.back = true;});

     this.back = false;
   }

   AddArgument(prompt) {
     this.argumentScene.AddPrompt(prompt);
   }

   /**
    * Renders the FormulaUI.
    */
   Render() {
     if(this.argumentScene.HasEnoughArguments()) {
       if(!this.argumentScene.AllArgumentsCollected()) {
         this.argumentScene.Render();
       }
       else {
         print("Arguments collected!");
       }
     }
     else {
       print("FormulaUI.js: THERE\'S NOT ENOUGH ARGUMENTS!");
     }
   }

 }
