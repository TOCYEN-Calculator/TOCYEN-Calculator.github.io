/**
 * A UI meant for solving formulas by asking the user for its required
 * variables.
 * @class
 */
 class FormulaUI {
   constructor(formula) {
     this.formula = formula;
     this.requiredArguments = formula.length;
     this.arguments = [];
     this.prompts = [];
     this.currentPromptID = 0;

     this.input = new Input("Errror");
     this.input.onReturn.AddListener(() => this.ProcessResult());
     this.input.SetActive(true);
   }

   ProcessResult() {
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



   AddArgument(prompt) {
     if(this.prompts.length == 0) {
       this.input.SetPrompt(prompt);
     }
     this.prompts.push(prompt);
   }

   HasEnoughArguments() {
     return this.prompts.length == this.requiredArguments;
   }

   Render() {
     if(this.HasEnoughArguments()) {
       if(this.currentPromptID <= this.prompts.length - 1) {
         this.input.Render();
       }
       else {
         Aligner.SetReference(Aligner.REFERENCE.CENTER);
         Text(str(this.formula(...this.arguments)), 0, -50);
       }
     }
     else {
       print("FormulaUI.js: THERE\'S NOT ENOUGH ARGUMENTS!");
     }
   }

 }
