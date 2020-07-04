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
  }

};
