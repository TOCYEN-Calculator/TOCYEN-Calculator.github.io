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
     var filteredArgs = [];
     var argsIndex = 0;
     for(var index = 0; index < FormulaTemplate.currentTemplate.formula.ArgumentsNeeded() + 1; index++) {
       if(index == FormulaTemplate.currentTemplate.formula.VariableInMap(FormulaTemplate.currentTemplate.variable)) {
         filteredArgs.push(null);
       }
       else {
         filteredArgs.push(args[argsIndex]);
         argsIndex++;
       }
     }
     print(filteredArgs);


     FormulaTemplate.currentTemplate.formula.SetValues(...filteredArgs);







     var result = FormulaTemplate.currentTemplate.formula.SolveFor(FormulaTemplate.currentTemplate.variable);

     this.resultFrag.SetResult(result);
   }

   LoadFormula() {
     var currentTemplate = FormulaTemplate.currentTemplate;

     // Figure out what the resulting prompt is.
     this.argumentFrag.SetArgumentsNeeded(currentTemplate.formula.ArgumentsNeeded());

     var filteredPrompts = [];
     for(var index in currentTemplate.prompts) {
       if(index != currentTemplate.formula.VariableInMap(currentTemplate.variable)) {
         filteredPrompts.push(currentTemplate.prompts[index]);
       }
     }
     this.argumentFrag.SetPrompts(filteredPrompts);

     var filteredResult = "ERROR";
     for(var index in currentTemplate.prompts) {
       if(index == currentTemplate.formula.VariableInMap(currentTemplate.variable)) {
         filteredResult = currentTemplate.resultPrompts[index];
         break;
       }
     }
     this.resultFrag.SetResultPrompt(filteredResult);                           ////saoifshadifuhjsadi

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
