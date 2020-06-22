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
  InputHandler.constructor();

  // Load formulas
  FormulaTemplate.constructor();
  PhysicsFormulas.constructor();

  // Add scenes
  SceneManager.AddScene(new MenuScene(), "MenuScene");
  SceneManager.AddScene(new SubjectScene(), "SubjectScene");
  SceneManager.AddScene(new PhysicsScene(), "PhysicsScene");
  SceneManager.AddScene(new FormulaScene(), "FormulaScene");
}

let fps = 0;

function draw() {
  background(0);
  Mouse.Update();
  SceneManager.Render();

  textSize(20);
  Aligner.SetReference(Aligner.REFERENCE.TOPRIGHT);
  fps = lerp(fps, frameRate(), 0.05);
  Text(str(floor(fps)), -100, 100);
}
