class FormulaTemplate {
  static constructor() {
    this.currentTemplate = this.CreateBlankTemplate();
    this.onLoad = new Event();
  }

  static CreateBlankTemplate() {
    return {resultPrompt: "", prompts: [], formula: () => {return 0;}};
  }

  static LoadTemplate(template) {
    this.currentTemplate = template;
    this.onLoad.Call();
  }
}
