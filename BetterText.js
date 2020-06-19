/*
 * BetterText.js
 *
 * Provides helper functions that make text creation easier.
*/

/**
 * Makes text with a relative position based on Aligner.js.
 * @param {string} strText - The text shown on the button.
 * @param {number} x - x position of the text.
 * @param {number} y - y position of the text.
 */
function Text(strText, x, y) {
  var absPosition = Aligner.GetAbsolutePosition(x, y);
  Aligner.SetLastText(strText, absPosition.x, absPosition.y);

  text(strText, absPosition.x, absPosition.y);
}

/**
 * Makes text below the last one based on Aligner.js
 * @param {string} strText - The text shown on the button.
 */
function TextV(strText) {
  var nextPosition = Aligner.GetNextPosition();

  text(strText, nextPosition.x, nextPosition.y);
}

function ResetFillColor() {
  fill(255);
}
