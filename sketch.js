function setup() {
  var canvas = createCanvas(windowHeight, windowHeight);
  canvas.center('horizontal');

  fill(255);
  textFont('Arial');
  textAlign(CENTER, CENTER);

  var button = createButton('CLICK ON ME');
  button.parent(canvas);
}

function draw() {
  background(0);

  textSize(30);

  Aligner.constructor();

  Aligner.SetReference(Aligner.POSITION.CENTER);
  Text("CENTER", 0, 0);

}
