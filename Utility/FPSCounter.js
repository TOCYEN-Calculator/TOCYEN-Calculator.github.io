/*
  FPSCounter.js
  
  A FPS counter. Learps current FPS to the nearest integer.
*/
class FPSCounter {
  constructor() {
    this.fps = 0;
  }
  
  Render() {
    this.fps = lerp(this.fps, frameRate(), 0.05);
    
    Scaler.TextSize(5);
    Aligner.AlignMode(enumPositions.BOTTOMRIGHT);
    Aligner.Text(str(round(this.fps)), createVector(-50, -50));
  }

}