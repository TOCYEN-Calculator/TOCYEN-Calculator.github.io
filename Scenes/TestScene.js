/*
 * Test.. stuff.
*/
class TestScene extends Scene {
  constructor() {
    super();
    Aligner.SetReference(Aligner.REFERENCE.TOP);
    textSize(4);
    this.elements.push(new TextElement("TEST", createVector(0, 100)));
    this.elements.push(new TextElement("TEST2"));

    this.test = new Formula("F = a * b * c", {F: null, a: null, b:null, c:null});
    this.test.SetValues("F", {a:5,b:234.3});
    //print(this.test.Solve());
    this.test.SetValues("F", {a:5,b:4, c:234.2343});
    //print(this.test.Solve());
    this.test.SetValues("a");
    //print(this.test.Solve());

    Aligner.SetReference(Aligner.REFERENCE.CENTER);
    textSize(8);
    var testShow = new FormulaElement(String.raw`F = a \cdot b \cdot c`, createVector(0,0));
    testShow.AssignToFormula(0, PhysicsFormulas.newtonSecond, "m");

    this.elements.push(testShow);
  }

};
