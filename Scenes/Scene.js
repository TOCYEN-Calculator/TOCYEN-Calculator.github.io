class Scene {
  constructor() {
    this.elements = [];
    this.pages = [];
  }
  Render() {
    for(var i = 0; i < this.elements.length; i++) {
      this.elements[i].Render();
    }
  }

  NewPage() {
    this.SavePage();
    this.elements = [];
  }

  SavePage() {
    this.pages.push(this.elements);
  }

  ToPage(index) {
    if(index in this.pages) {
      this.elements = this.pages[index];
    }
    else {
      print(`Scene.js: Page index ${index} was not a valid page.`);
    }
  }
}
