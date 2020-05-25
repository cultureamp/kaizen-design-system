const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }
  method1() {
    this.log("method 1 just ran");
  }

  method2() {
    this.log("method 2 just ran");
  }

  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your component name",
        default: ""
      }
    ]);

    this.log("app name", answers.name);
  }
};
