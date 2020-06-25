function setup() {
  // Align canvas to center.
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.center('horizontal');

  // Setup text settings.
  ResetFillColor();
  textFont('MuseoModerno');
  textAlign(CENTER, CENTER);
  imageMode(CENTER);

  // Initialize utilities
  Aligner.constructor();
  SceneManager.constructor();
  Mouse.constructor();
  InputHandler.constructor();

  // Load formulas
  FormulaTemplate.constructor();
  PhysicsFormulas.constructor();
  ChemistryFormulas.constructor();
  FormulaImages.constructor();

  // Load formula pictures
  FormulaImages.LoadImage("Physics2.jpg");

  // Add scenes
  SceneManager.AddScene(new MenuScene());
  SceneManager.AddScene(new SubjectScene());
  SceneManager.AddScene(new PhysicsScene());
  SceneManager.AddScene(new ChemistryScene());
  SceneManager.AddScene(new FormulaScene());
  SceneManager.AddScene(new Mechanics());
  SceneManager.AddScene(new KineticEnergyScene());
}

var fps = 0;

function draw() {
  background(0);
  Mouse.Update();
  SceneManager.Render();

  fps = lerp(fps, frameRate(), 0.05);
  Aligner.SetReference(Aligner.REFERENCE.BOTTOMRIGHT);
  textSize(100);
  Text(str(floor(fps)), -100, -100);
}
