/*
 * BetterButtons.js
 *
 * Provides helper functions that make button creation easier.
*/


/**
 * Makes the creation of a formula button really easy!
 * Takes into account textSize() and alignment.
 *
 * @param  {string} label - The text on the button.
 * @param  {FormulaTemplate} template - The formula template that will get loaded on the button's click.
 * @param  {Vector} position - The relative position of the button.
 * @return {Button} A Button.js button.
 */
function CreateFormulaButton(label, template, position) {
  var button = null;
  if(arguments.length == 2) {
    button = new ButtonElement(label, 20);
  }
  else {
    button = new ButtonElement(label, position);
  }
  button.onClick.AddListener(() => FormulaTemplate.LoadTemplate(template));
  button.onClick.AddListener(() => SceneManager.ToScene("FormulaScene"));
  return button;
}


/**
 * Creates a standardized back button. textSize() = 50px && Aligner.SetReference =
 * Aligner.REFERENCE.BOTTOMLEFT.
 *
 * @param {string} previousSceneName - The name of the scene that the back button will lead to.
 * @return {Button} A Button.js button.
 */
function CreateBackButton(previousSceneName) {
  Aligner.SetReference(Aligner.REFERENCE.BOTTOMLEFT);
  textSize(50);
  var button = new ButtonElement("Back", createVector(100, -100));
  button.onClick.AddListener(() => SceneManager.ToScene(previousSceneName));
  return button;
}


/**
 * Makes scene transitions easy! Takes into account textSize() and alignment.
 *
 * @param  {string} label - The text shown on the button.
 * @param  {string} sceneName - The name of the scene that the button will lead to.
 * @param  {Vector} position - The relative position of the button.
 * @return {Button} A Button.js button.
 */
function CreateSceneButton(label, sceneName, position) {
  var button = null;
  if(arguments.length == 2) {
    button = new ButtonElement(label, 20);
  }
  else {
    button = new ButtonElement(label, position);
  }
  button.onClick.AddListener(() => SceneManager.ToScene(sceneName));
  return button;
}

function CreateLeftPageButton(func) {
  Aligner.SetReference(Aligner.REFERENCE.LEFT);
  var button = new ButtonElement("<", createVector(50,0));
  button.onClick.AddListener(func);
  return button;
}

function CreateRightPageButton(func) {
  Aligner.SetReference(Aligner.REFERENCE.RIGHT);
  var button = new ButtonElement(">", createVector(-50,0));
  button.onClick.AddListener(func);
  return button;
}
