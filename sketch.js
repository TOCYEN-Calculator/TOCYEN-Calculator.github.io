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

  // Load formula pictures
  FormulaImages.LoadImage("Physics2.jpg");

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

  var rightSide = algebra.parse("m * a").eval({m: 5, a: 6}); // m * a
  var leftSide = algebra.parse("F"); // F
  var eq = new algebra.Equation(leftSide, rightSide);
  print(eq.toString());
  var answer = eq.solveFor('F');
  print(answer.toString());
}

function draw() {
  background(0);
  Mouse.Update();
  SceneManager.Render();
}
