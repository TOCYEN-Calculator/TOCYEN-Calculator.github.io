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
  Mouse.constructor();

  // Add scenes
  SceneManager.AddScene(new MenuScene());
  SceneManager.AddScene(new SubjectScene());
  SceneManager.AddScene(new PhysicsScene());
}

function draw() {
  background(0);
  Mouse.Update();
  SceneManager.Render();
}
