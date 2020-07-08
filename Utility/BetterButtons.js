/*
 * BetterButtons.js
 *
 * Provides functions that make button creation easier.
 * Could be referred to as button prefabs.
*/

/**
 * Creates a standardized back button for the sake of consistency. Will override current
 * textSize() and alignment.
 *
 * @param  {string} previousSceneName - The name of the scene that the back button will lead to.
 * @return {Button} A Button.js button.
 */
function CreateBackButton(previousSceneName) {
  Aligner.SetReference(Aligner.REFERENCE.BOTTOMLEFT);
  textSize(2);
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
function CreateSceneButton(label, sceneName, position = 0) {
  var button = new ButtonElement(label, position);
  button.onClick.AddListener(() => SceneManager.ToScene(sceneName));
  return button;
}
