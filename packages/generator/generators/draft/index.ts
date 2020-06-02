const Generator = require("yeoman-generator")
const kebabCase = require("lodash/kebabCase")
const startCase = require("lodash/startCase")

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
      {
        type: "confirm",
        name: "elm",
        message: "Would you like to generate Elm?",
      },
      {
        type: "confirm",
        name: "react",
        message: "Would you like to generate React?",
      },
    ])

    this.log("app name", this.answers.name)
  }

  writing() {
    const packageLocation = `draft-packages/${kebabCase(this.answers.name)}/`
    // root level files
    this.fs.copyTpl(
      this.templatePath("package.txt"),
      this.destinationPath(`${packageLocation}package.json`),
      { componentName: kebabCase(this.answers.name) }
    )

    this.fs.copyTpl(
      this.templatePath("tsconfig.txt"),
      this.destinationPath(`${packageLocation}tsconfig.dist.json`)
    )

    // elm component files
    if (this.answers.elm) {
      this.fs.copyTpl(
        this.templatePath("component-elm.txt"),
        this.destinationPath(
          `${packageLocation}KaizenDraft/${startCase(this.answers.name)}.elm`
        ),
        { componentName: startCase(this.answers.name) }
      )
    }

    // react component files
    if (this.answers.react) {
      this.fs.copyTpl(
        this.templatePath("index.txt"),
        this.destinationPath(`${packageLocation}index.ts`),
        { componentName: startCase(this.answers.name) }
      )

      this.fs.copyTpl(
        this.templatePath("component-react.txt"),
        this.destinationPath(
          `${packageLocation}/KaizenDraft/${startCase(this.answers.name)}.tsx`
        ),
        { componentName: startCase(this.answers.name) }
      )

      this.fs.copyTpl(
        this.templatePath("story-react.txt"),
        this.destinationPath(
          `draft-packages/stories/${startCase(this.answers.name)}.stories.tsx`
        ),
        { componentName: startCase(this.answers.name) }
      )
    }
  }
}
