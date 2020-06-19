/*
 * BetterText.js
 *
 * Provides helper functions that make text creation easier.
*/

// Applies align to text.
function Text(strText, x, y) {
  var absPosition = Aligner.GetAbsolutePosition(x, y);

  text(strText, absPosition.x, absPosition.y);
}

function ResetFillColor() {
  fill(255);
}
