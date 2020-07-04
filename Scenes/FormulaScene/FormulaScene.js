/*
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
     // FormulaTemplate.Load() is linked to formula buttons.
     FormulaTemplate.onLoad.AddListener(() => this.LoadFormula());

     // Listen to when arguments are collected.
     this.argumentFrag.onFinished.AddListener(() => this.CalculateResult());
   }

   CalculateResult() {
     var args = this.argumentFrag.GetArguments();

     // Unpack arguments for certain variables
     FormulaTemplate.currentTemplate.formula.SetValues(null,...args);             //asoufdyhwefoi
     var result = FormulaTemplate.currentTemplate.formula.SolveFor('F');           //asdfoihjsdfiu

     this.resultFrag.SetResult(result);
   }

   LoadFormula() {
     var currentTemplate = FormulaTemplate.currentTemplate;

     // Figure out what the resulting prompt is.
     this.resultFrag.SetResultPrompt("(TEST) FORCE IS:");                           ////saoifshadifuhjsadi
     this.argumentFrag.SetArgumentsNeeded(currentTemplate.formula.ArgumentsNeeded());
     this.argumentFrag.SetPrompts(currentTemplate.prompts);                                 ////// IUHasfudjghassa

     // Hardcode back button reset.
     this.resultFrag.backButton.onClick.listeners[0] = () => SceneManager.ToScene(SceneManager.previousScene);
     this.argumentFrag.backButton.onClick.listeners[0] = () => SceneManager.ToScene(SceneManager.previousScene);
   }

   Render() {
     if(this.argumentFrag.HasEnoughPrompts()) {
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
