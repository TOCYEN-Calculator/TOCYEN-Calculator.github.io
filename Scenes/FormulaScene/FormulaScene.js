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
     var currentTemplate = FormulaTemplate.currentTemplate;

     // Unpack arguments
     print(args);
     currentTemplate.formula.SetVariableValues(currentTemplate.variable, ...args);
     var result = currentTemplate.formula.Solve();

     this.resultFrag.SetResult(result);
   }

   LoadFormula() {
     var currentTemplate = FormulaTemplate.currentTemplate;
     var variableToSolveFor = FormulaTemplate.currentTemplate.variable;

     // Figure out what the resulting prompt is.
     this.argumentFrag.SetArgumentsNeeded(currentTemplate.formula.ArgumentsNeeded());

     var filteredPrompts = [];
     for(var key in currentTemplate.prompts) {
       if(key != variableToSolveFor) {
         filteredPrompts.push(currentTemplate.prompts[key]);
       }
     }
     this.argumentFrag.SetPrompts(filteredPrompts);

     var filteredResult = "Error";
     for(var key in currentTemplate.resultPrompts) {
       if(key == variableToSolveFor) {
         filteredResult = currentTemplate.resultPrompts[key];
         break
       }
     }
     this.resultFrag.SetResultPrompt(filteredResult);

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
