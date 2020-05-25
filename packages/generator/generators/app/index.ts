const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your component name",
        default: "",
      },
    ])

    this.log("app name", this.answers.name)
  }

  writing() {
    // root level files
    this.fs.copyTpl(
      this.templatePath("package.txt"),
      this.destinationPath("draft-packages/package.json"),
      { componentName: this.answers.name }
    )

    this.fs.copyTpl(
      this.templatePath("tsconfig.txt"),
      this.destinationPath("draft-packages/tsconfig-config.json"),
      { componentName: this.answers.name }
    )

    this.fs.copyTpl(
      this.templatePath("index.txt"),
      this.destinationPath("draft-packages/index.ts"),
      { componentName: this.answers.name }
    )

    // component files
    this.fs.copyTpl(
      this.templatePath("component-elm.txt"),
      this.destinationPath(
        `draft-packages/KaizenDraft/${this.answers.name}.elm`
      ),
      { componentName: this.answers.name }
    )

    this.fs.copyTpl(
      this.templatePath("component-react.txt"),
      this.destinationPath(
        `draft-packages/KaizenDraft/${this.answers.name}.tsx`
      ),
      { componentName: this.answers.name }
    )
  }
}
