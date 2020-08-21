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
        message: "Your component name in PascalCase (Eg: EmptyState)",
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
    const componentName = pascalCase(this.answers.name)
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

    this.fs.copyTpl(
      this.templatePath("README.mdx"),
      this.destinationPath(`${packageLocation}README.mdx`),
      { componentName }
    )

    // elm component files
    if (this.answers.elm) {
      this.fs.copyTpl(
        this.templatePath("component-elm.txt"),
        this.destinationPath(
          `${packageLocation}KaizenDraft/${componentName}/${componentName}.elm`
        ),
        { componentName: componentName.toLowerCase() }
      )
    }

    // react component files
    if (this.answers.react) {
      this.fs.copyTpl(
        this.templatePath("index.txt"),
        this.destinationPath(`${packageLocation}index.ts`),
        { componentName }
      )

      this.fs.copyTpl(
        this.templatePath("component-react.txt"),
        this.destinationPath(
          `${packageLocation}/KaizenDraft/${componentName}/${componentName}.tsx`
        ),
        { componentName }
      )

      this.fs.copyTpl(
        this.templatePath("story-react.txt"),
        this.destinationPath(
          `draft-packages/stories/${componentName}.stories.tsx`
        ),
        {
          componentName: pascalCase(this.answers.name),
          npmPackageName: `@kaizen/draft-${kebabCase(this.answers.name)}`,
        }
      )
    }

    // scss files
    this.fs.copyTpl(
      this.templatePath("component-scss.txt"),
      this.destinationPath(
        `${packageLocation}/KaizenDraft/${componentName}/styles.module.scss`
      )
    )
  }
}

function pascalCase(s) {
  return startCase(s).replace(/ /gi, "")
}
