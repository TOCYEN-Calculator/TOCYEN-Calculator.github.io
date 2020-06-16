/*
  sketch.js
  
  The main file of the program. Runs everything.
*/

let sceneManager;
let fpsCounter;

function setup() {
  // Create and setup window.
  var canvas = createCanvas(windowHeight, windowHeight);
  
  let div = createDiv('').size(0, 0);
  div.style('background-color', 'orange');
  div.center();
  
  canvas.child(div);
  canvas.center();
  
  // Setup font and text origin.
  textFont("MuseoModerno");
  textAlign(CENTER, CENTER);
  
  // Initialize static constructors / load utility
  Scaler.constructor();
  Aligner.constructor();
  fpsCounter = new FPSCounter();
  
  // Load scenes.
  SceneManager.constructor();
  SceneManager.AddScene(new Menu());
  SceneManager.AddScene(new Subjects());
}

function draw() {
  // Change background color (also clears canvas)
  background(0);
  
  // Draw current scene
  SceneManager.Render();
  
  // FPS counter
  fpsCounter.Render();
}




