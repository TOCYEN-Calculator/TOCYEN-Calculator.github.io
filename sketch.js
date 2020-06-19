
let button;

function setup() {
  var canvas = createCanvas(windowHeight, windowHeight);
  canvas.center('horizontal');

  ResetFillColor();
  textFont('Arial');
  textAlign(CENTER, CENTER);

  Aligner.constructor();
  SceneManager.constructor();

  SceneManager.AddScene(new Menu());
}

function draw() {
  background(0);
  SceneManager.Render();
}
