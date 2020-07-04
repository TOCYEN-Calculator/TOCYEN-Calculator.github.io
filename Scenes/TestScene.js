/*
 * Test.. stuff.
*/
class TestScene extends Scene {
  constructor() {
    super();
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(100);
    this.elements.push(new TextElement("TEST", createVector(0, 100)));

    var newtonsSecondLaw = new Formula('F = m * a', {F: null, m: null, a: null});
    newtonsSecondLaw.SetValues(5, null, 2);
    print(newtonsSecondLaw.SolveFor('m'));


    //var ht = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}", {
    //throwOnError: false
    //});
    //var div = createDiv(ht);
    //div.id('test');
  }

};
