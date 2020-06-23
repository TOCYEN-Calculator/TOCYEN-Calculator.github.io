class Scene {
  constructor() {
    this.elements = [];
  }
  Render() {
    for(var i = 0; i < this.elements.length; i++) {
      this.elements[i].Render();
    }
  }
}
