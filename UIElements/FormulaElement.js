class FormulaElement extends Element {

  /**
   * Constructs a formula element. Automatically hide() .div until needed.
   *
   * @param  {string} formula  A raw string parsible by LaTeX.
   * @param  {Vector} position The relative position of the center of the formula element.
   */
  constructor(formula, position) {
    super(position);
    this.formula = formula;

    var formulaHTML = katex.renderToString(formula, {
      throwOnError: false
    });

    this.div = createDiv(formulaHTML);
    this.div.class('formulaElement');
    this.div.position(0,0);
    this.div.position(this.position.x - this.div.elt.offsetWidth / 2, this.position.y - this.div.elt.offsetHeight / 2);
    this.div.hide();

  }

  SetFontSize(number) {
    this.div.show();
    this.div.style('font-size', `${number}vw`);
    this.div.position(this.position.x - this.div.elt.offsetWidth / 2, this.position.y - this.div.elt.offsetHeight / 2);
    this.div.hide();
  }
}
