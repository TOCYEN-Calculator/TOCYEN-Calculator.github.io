/**
 * A UI meant for solving formulas by asking the user for its required
 * variables.
 * @class
 */
 class FormulaScene {
   constructor() {
     this.argumentScene = new ArgumentScene();
     this.resultScene = new ResultScene();

     // Reset is needed to clear out list of prompts.
     this.resultScene.backButton.onClick.AddListener(() => this.argumentScene.Reset());

     // Listen to new FormulaTemplate loads.
     FormulaTemplate.onLoad.AddListener(() => this.LoadFormula());

     // Listen to when arguments are collected.
     this.argumentScene.onFinished.AddListener(() => this.CalculateResult());
   }

   CalculateResult() {
     var args = this.argumentScene.GetArguments();

     // Unpack Arguments
     var result = FormulaTemplate.currentTemplate.formula(...args);

     this.resultScene.SetResult(result);
   }

   LoadFormula() {
     var currentTemplate = FormulaTemplate.currentTemplate;

     this.resultScene.SetResultPrompt(currentTemplate.resultPrompt);
     this.argumentScene.SetArgumentsNeeded(currentTemplate.formula.length);
     this.argumentScene.SetPrompts(currentTemplate.prompts);
   }

   Render() {
     if(this.argumentScene.HasEnoughArguments()) {
       if(!this.argumentScene.AllArgumentsCollected()) {
         this.argumentScene.input.SetActive(true);
         this.argumentScene.Render();
       }
       else {
         this.argumentScene.input.SetActive(false);
         this.resultScene.Render();
       }
     }
     else {
       print("FormulaUI.js: THERE\'S NOT ENOUGH ARGUMENTS!");
     }
   }

 }
