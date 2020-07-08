function setup() {
  // Align canvas to center.
  noCanvas();

  // Setup text settings.
  textFont('MuseoModerno');
  textAlign(CENTER, CENTER);
  imageMode(CENTER);

  // Initialize utilities
  Aligner.constructor();
  Scaler.constructor();
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
  SceneManager.AddScene(new Calorimetry());
  SceneManager.AddScene(new Stoichiometry());
  SceneManager.AddScene(new Molarity());
  SceneManager.AddScene(new TestScene());

  // Initial Scene.
  SceneManager.ToScene("Stoichiometry");
}

function draw() {
  SceneManager.Render();
}
