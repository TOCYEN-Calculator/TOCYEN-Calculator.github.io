/*
 * BetterText.js
 *
 * Provides helper functions that make text creation easier.
*/

// Applies align to text.
function Text(strText, x, y) {
  var offset = Aligner.GetOffset();

  text(strText, x + offset.x, y + offset.y);
}
