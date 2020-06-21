/**
 * A UI meant for solving formulas by asking the user for its required
 * variables.
 * @class
 */
 class FormulaScene {
   constructor() {
     this.formula = "";

     this.argumentScene = new ArgumentScene();
     this.argumentScene.input.SetActive(true);

     this.resultScene = new ResultScene();
     this.resultScene.backButton.onClick.AddListener(() => this.argumentScene.Reset());

     // Back button
     Aligner.SetReference(Aligner.REFERENCE.BOTTOMLEFT);
     textSize(50);
     this.backButton = new Button("Back", createVector(100,-100));
     this.backButton.onClick.AddListener(() => {this.back = true;});

     this.LoadFormula(); // Temporary
     FormulaTemplate.onLoad.AddListener(() => this.LoadFormula());
   }

   LoadFormula() {
     var currentTemplate = FormulaTemplate.currentTemplate;
     this.formula = currentTemplate.formula;
     this.resultScene.SetResultPrompt(currentTemplate.resultPrompt);
     this.argumentScene.SetPrompts(currentTemplate.prompts);
     this.argumentScene.SetArgumentsNeeded(this.formula.length);
   }

   Render() {
     if(this.argumentScene.HasEnoughArguments()) {
       if(!this.argumentScene.AllArgumentsCollected()) {
         this.argumentScene.Render();
       }
       else {
         this.resultScene.Render();
       }
     }
     else {
       print("FormulaUI.js: THERE\'S NOT ENOUGH ARGUMENTS!");
     }
   }

 }
