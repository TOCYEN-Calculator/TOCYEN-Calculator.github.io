var windowDiv = null;

function setup() {
  // Align canvas to center.
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.center('horizontal');

  windowDiv = createDiv();
  windowDiv.size(windowWidth, windowHeight);

  // Setup text settings.
  ResetFillColor();
  textFont('MuseoModerno');
  textAlign(CENTER, CENTER);
  imageMode(CENTER);

  // Initialize utilities
  Aligner.constructor();
  Scaler.constructor();
  SceneManager.constructor();
  Mouse.constructor();
  InputHandler.constructor();

  // Load formulas
  FormulaTemplate.constructor();
  PhysicsFormulas.constructor();
  ChemistryFormulas.constructor();
  FormulaImages.constructor();

  // Load scenes
  SceneManager.AddScene(new MenuScene());
  SceneManager.AddScene(new SubjectScene());
  SceneManager.AddScene(new PhysicsScene());
  SceneManager.AddScene(new ChemistryScene());
  SceneManager.AddScene(new FormulaScene());
  SceneManager.AddScene(new Mechanics());
  SceneManager.AddScene(new KineticEnergyScene());
  SceneManager.AddScene(new NewtonSecondScene());
  SceneManager.AddScene(new Calorimetry());
  SceneManager.AddScene(new HeatChangeScene());
  SceneManager.AddScene(new Stoichiometry());
  SceneManager.AddScene(new MolarConversionsScene());
  SceneManager.AddScene(new Molarity());

  SceneManager.AddScene(new TestScene());

  // Initial Scene.
  SceneManager.ToScene("MenuScene");
}

function draw() {
  background(0);
  Mouse.Update();
  SceneManager.Render();
}
