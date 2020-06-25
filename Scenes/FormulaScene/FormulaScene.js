/**
 * A scene meant for solving and showing formulas by asking the user for its required
 * variables.
 */
 class FormulaScene {
   constructor() {
     this.argumentFrag = new ArgumentFragment();
     this.resultFrag = new ResultFragment();

     // Reset is needed to clear out list of prompts.
     this.resultFrag.backButton.onClick.AddListener(() => this.argumentFrag.Reset());

     // Listen to new FormulaTemplate loads.
     FormulaTemplate.onLoad.AddListener(() => this.LoadFormula());

     // Listen to when arguments are collected.
     this.argumentFrag.onFinished.AddListener(() => this.CalculateResult());
   }

   CalculateResult() {
     var args = this.argumentFrag.GetArguments();

     // Unpack Arguments
     var result = FormulaTemplate.currentTemplate.formula(...args);

     this.resultFrag.SetResult(result);
   }

   LoadFormula() {
     var currentTemplate = FormulaTemplate.currentTemplate;

     this.resultFrag.SetResultPrompt(currentTemplate.resultPrompt);
     this.argumentFrag.SetArgumentsNeeded(currentTemplate.formula.length);
     this.argumentFrag.SetPrompts(currentTemplate.prompts);

     // Hardcode back button reset.
     this.resultFrag.backButton.onClick.listeners[0] = () => SceneManager.ToScene(SceneManager.previousScene);
     this.argumentFrag.backButton.onClick.listeners[0] = () => SceneManager.ToScene(SceneManager.previousScene);
   }

   Render() {
     if(this.argumentFrag.HasEnoughArguments()) {
       if(!this.argumentFrag.AllArgumentsCollected()) {
         this.argumentFrag.input.SetActive(true);
         this.argumentFrag.Render();
       }
       else {
         this.argumentFrag.input.SetActive(false);
         this.resultFrag.Render();
       }
     }
     else {
       print("FormulaUI.js: THERE\'S NOT ENOUGH ARGUMENTS!");
     }
   }

 }
