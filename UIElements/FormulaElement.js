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

    this.elements = [];
    for(var index in this.div.elt.childNodes) {
      this.ScanLeaves(this.div.elt.childNodes[index]);
    }

    this.div.hide();
    print(this.elements);
  }

  SetFontSize(number) {
    this.div.show();
    this.div.style('font-size', `${number}vw`);
    this.div.position(this.position.x - this.div.elt.offsetWidth / 2, this.position.y - this.div.elt.offsetHeight / 2);
    this.div.hide();
  }

  ScanLeaves(element) {
    for(var index in element.childNodes) {
      if(/^[A-Z]$/i.test(element.childNodes[index].data)) {
        var data = element.childNodes[index].data;
        var element = element.childNodes[index].parentElement;
        element.setAttribute('class', element.getAttribute('class') + ' formulaElementVariable');
        if(element.localName != "mi") {
          this.elements.push([data, element]);
        }
      }
      this.ScanLeaves(element.childNodes[index]);
    }
  }
}
