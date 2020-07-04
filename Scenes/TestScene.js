/*
 * Test.. stuff.
*/
class TestScene extends Scene {
  constructor() {
    super();
    this.elements.push(new TextElement("TEST", createVector(0, 100)));

    var newtonsSecondLaw = new Formula('F = 1 / (m * a)');
    newtonsSecondLaw.SetValues({F: 5, m: null, a: 2});
    print(newtonsSecondLaw.SolveFor('m'));


    //var ht = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}", {
    //throwOnError: false
    //});
    //var div = createDiv(ht);
    //div.id('test');
  }

};
