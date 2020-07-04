/*
 * Test.. stuff.
*/
class TestScene extends Scene {
  constructor() {
    super();
    this.elements.push(new TextElement("TEST", createVector(0, 100)));

    var result = nerdamer('cos(x)',{x:6});
    console.log(result.text());

    var sol = nerdamer.solveEquations('y + 4 = x - 3','x');
    console.log(sol.toString());
  }

};
