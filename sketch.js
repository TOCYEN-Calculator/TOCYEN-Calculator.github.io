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
  Scaler.constructor();
  Mouse.constructor();
  SceneManager.constructor();
  InputHandler.constructor();

  // Load formulas
  FormulaTemplate.constructor();
  PhysicsFormulas.constructor();
  ChemistryFormulas.constructor();

  // Load scenes
  SceneManager.AddScene(new MenuScene());
  SceneManager.AddScene(new SubjectScene());
  SceneManager.AddScene(new PhysicsScene());
  SceneManager.AddScene(new ChemistryScene());
  SceneManager.AddScene(new FormulaScene());
  SceneManager.AddScene(new Mechanics());
  /*SceneManager.AddScene(new Calorimetry());
  SceneManager.AddScene(new Stoichiometry());
  SceneManager.AddScene(new Molarity());*/
  SceneManager.AddScene(new TestScene());

  // Initial Scene.
  SceneManager.ToScene("MenuScene");
}

function draw() {
  Mouse.Update();
  SceneManager.Render();
}
