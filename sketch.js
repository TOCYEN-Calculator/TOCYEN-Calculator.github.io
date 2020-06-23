function preload() {
  ImageManager.constructor();
  //ImageManager.LoadImage('Test', 'Capture.PNG');
}

function setup() {
  // Align canvas to center.
  var canvas = createCanvas(windowHeight, windowHeight);
  canvas.center('horizontal');

  // Setup text settings.
  ResetFillColor();
  textFont('MuseoModerno');
  textAlign(CENTER, CENTER);

  // Initialize utilities
  Aligner.constructor();
  SceneManager.constructor();
  Mouse.constructor();
  InputHandler.constructor();

  // Load formulas
  FormulaTemplate.constructor();
  PhysicsFormulas.constructor();
  ChemistryFormulas.constructor();

  // Add scenes
  SceneManager.AddScene(new MenuScene());
  SceneManager.AddScene(new SubjectScene());
  SceneManager.AddScene(new PhysicsScene());
  SceneManager.AddScene(new ChemistryScene());
  SceneManager.AddScene(new FormulaScene());
  SceneManager.AddScene(new Mechanics());
}

function draw() {
  background(0);
  Mouse.Update();
  SceneManager.Render();
  ImageManager.Render();
}
