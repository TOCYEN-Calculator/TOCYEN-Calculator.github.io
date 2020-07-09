/*
 * The scene that asks the user for variables of a FormulaTemplate,
 * and spits out the result.
 */
 class FormulaScene extends Scene {
   constructor() {
     super();

     this.onEnter.AddListener( () => {
       SceneManager.ToScene("ArgumentScene");
     });

   }

 }
