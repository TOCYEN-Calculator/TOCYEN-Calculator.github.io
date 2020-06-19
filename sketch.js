function setup() {
  // Align canvas to center.
  var canvas = createCanvas(windowHeight, windowHeight);
  canvas.center('horizontal');

  // Setup text settings.
  ResetFillColor();
  textFont('Arial');
  textAlign(CENTER, CENTER);

  // Initialize utilities
  Aligner.constructor();
  SceneManager.constructor();

  // Add scenes
  SceneManager.AddScene(new Menu());
  SceneManager.AddScene(new TestCalculate());
}

function draw() {
  background(0);
  SceneManager.Render();
}
