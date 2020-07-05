class FormulaElement {

  /**
   * Constructs a formula element.
   *
   * @param  {string} formula  A raw string parsible by LaTeX.
   * @param  {Vector} position The absolute position of the topright of the formula element.
   */
  constructor(formula, position) {
    this.formula = formula;

    var formulaHTML = katex.renderToString(formula, {
      throwOnError: false
    });

    this.div = createDiv(formulaHTML);
    this.div.position(position.x, position.y);
    this.div.class('formulaElement');
    //this.div.hide();
  }

  SetFontSize(number) {
    this.div.style('font-size', `${number}vw`)
  }
}
