/*
 * BetterText.js
 *
 * Provides helper functions that make text creation easier.
*/

/**
 * Makes text with a relative position based on Aligner.js.
 * Mainly used for prototyping.
 *
 * @param {string} strText - The text shown on the button.
 * @param {number} x - x relative position of the text.
 * @param {number} y - y relative position of the text.
 */
function Text(strText, x, y) {
  var absPosition = Aligner.GetAbsolutePosition(x, y);
  Aligner.SetLastText(strText, absPosition.x, absPosition.y);

  text(strText, absPosition.x, absPosition.y);
}


function ResetFillColor() {
  fill(255);
}
