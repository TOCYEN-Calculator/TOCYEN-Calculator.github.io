/*
 * Test.. stuff.
*/
class TestScene extends Scene {
  constructor() {
    super();
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    Scaler.TextSize(100);
    this.elements.push(new TextElement("TEST", createVector(0, 100)));

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    Scaler.TextSize(100);
    this.elements.push(CreateFormulaButton("F", PhysicsFormulas.newtonSecond, "F", createVector(0,0)));
    this.elements.push(CreateFormulaButton("m", PhysicsFormulas.newtonSecond, "m"));
    this.elements.push(CreateFormulaButton("a", PhysicsFormulas.newtonSecond, "a"));


    //var ht = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}", {
    //throwOnError: false
    //});
    //var div = createDiv(ht);
    //div.id('test');
  }

};
