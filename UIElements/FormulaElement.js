/**
 * Class dedicated to positing and formatting a KaTeX HTML element.
 * Derives from Element.js.
 *
 * @class
 */
class FormulaElement extends Element {

  /**
   * Constructs a formula element. Takes into account current alignment and textSize().
   *
   * @param  {string} formula  A raw string parsible by LaTeX.
   * @param  {Vector} position The relative position of the center of the formula element. It has to
   * be a vector.
   */
  constructor(formula, position) {
    super(createDiv(''), position);

    /**
     * The raw KaTeX formula string.
     */
    this.formula = formula;

    // Render katex formula onto html
    katex.render(formula, this.pElement.elt, {
      throwOnError: false
    });

    this.pElement.class('formulaElement');
    this.pElement.style('font-size', `${textSize()}vw`);
    this.RefreshElement();


    /**
     * An array of elements holding each element that represents
     * a variable (ASCII character).
     */
    this.elements = [];

    // Scan each child of the formula element for variables.
    for(var index in this.pElement.elt.childNodes) {
      this.ScanForVariables(this.pElement.elt.childNodes[index]);
    }
  }


  /**
   * Turns a element from the elements array into a clickable text (not Button.js!).
   * The text will load up a formula.
   *
   * @param  {number}         index      The index of the element in the elements array.
   * @param  {Formula}        formula    A Formula.js object.
   * @param  {string}         variable   The variable you want to solve for.
   * @param  {number | bool}  parent     Sometimes, you want a group of variables (like a fraction)
   * to be treated as a whole. This number tells the function to treat the (x)th parent of the element
   * to be turned into a clickable. Can be set to true to represent 1.
   */
  AssignToFormula(index, formula, variable, parent = 0) {
    var element = this.elements[index];

    if(parent === true) {
      parent = 1;
    }

    // Travel back to the right amount of "ancestors".
    for(var i = 0; i < parent; i++) {
      element = element.parentElement;
    }

    // Turn this element into a clickable.
    element.setAttribute('class', element.getAttribute('class') + ' formulaElementVariable');
    element.onclick = () => {
      FormulaLoader.LoadFormula(formula, variable);
      SceneManager.ToScene("FormulaScene");
    };
  }


  /**
   * Recursively scan the raw pElement for variable elements;
   * An internal function. Automatically adds any variable elements
   * to the elements array.
   *
   * @param  {HTML_Node} elements A HTML node.
   */
  ScanForVariables(elements) {
    for(var index in elements.childNodes) {
      var text = elements.childNodes[index];
      var isVariable = /^[A-Z]$/i.test(text.data);

      if(isVariable) {
        // Get the element that holds the HTML text element.
        // Needed as the HTML text element only holds data about text, duh.
        var parent = text.parentElement;

        // KaTeX produces a <mi> and <span> of each variable. Only get the <span>.
        if(parent.localName == "mi") {
          continue;
        }

        // Make the leaf node clickable.
        parent.style["pointer-events"] = "auto";
        this.elements.push(parent);
      }

      // Ignore nested SPANS by making them click-through.
      else if (text.nodeName == "SPAN") {
        text.style["pointer-events"] = "none";
      }

      // Recurse until you reach a HTML text node. Test nodes don't have childNodes.
      this.ScanForVariables(text);
    }
  }
}
