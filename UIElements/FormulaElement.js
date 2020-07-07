class FormulaElement extends Element {

  /**
   * Constructs a formula element. Automatically hide() .div until needed.
   *
   * @param  {string} formula  A raw string parsible by LaTeX.
   * @param  {Vector} position The relative position of the center of the formula element.
   */
  constructor(formula, position) {
    super(createDiv(''), position);
    this.formula = formula;

    var formulaHTML = katex.renderToString(formula, {
      throwOnError: false
    });

    this.pElement.html(formulaHTML);
    this.pElement.class('formulaElement');
    this.pElement.style('font-size', `${textSize()}vw`);
    this.RefreshElement();

    this.elements = [];
    for(var index in this.pElement.elt.childNodes) {
      this.ScanLeaves(this.pElement.elt.childNodes[index]);
    }
  }


  /**
   * Assign a variable to a formula template.
   *
   * @param  {type} index    description
   * @param  {type} toParent description
   * @param  {type} formula  description
   * @return {type}          description
   */
  AssignToFormula(index, formula, variable, toParent = false) {
    var element = this.elements[index];

    if(toParent) {
      // Make the parent one big button
      element = element.parentElement;

    }
    element.setAttribute('class', element.getAttribute('class') + ' formulaElementVariable');

    element.onclick = () => {
      FormulaTemplate.LoadTemplate(formula, variable);
      SceneManager.ToScene("FormulaScene");
    };
  }

  ScanLeaves(element) {
    for(var index in element.childNodes) {
      if(/^[A-Z]$/i.test(element.childNodes[index].data)) {
        var data = element.childNodes[index].data;
        var element = element.childNodes[index].parentElement;
        if(element.localName != "mi") {
          element.style["pointer-events"] = "auto";

          this.elements.push(element);
        }
      }
      else if (element.childNodes[index].nodeName == "SPAN") {
        element.childNodes[index].style["pointer-events"] = "none";
      }
      this.ScanLeaves(element.childNodes[index]);
    }
  }
}
