module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setHelper("preCurly", t => `{${t}`)

  plop.setGenerator("basic component", {
    description: "Generate a basic component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the component name?",
      },
      {
        type: "confirm",
        name: "isSubcomponent",
        message: "Is this a subcomponent?",
        default: false,
      },
      {
        type: "input",
        name: "parentComponentName",
        message: "What is the parent component name?",
        when: answers => answers.isSubcomponent,
      },
      {
        type: "confirm",
        name: "isFuture",
        message: "Is this a future component?",
        default: false,
      },
    ],
    actions: ({ isSubcomponent, isFuture }) => {
      const src = isFuture ? "src/__future__" : "src"

      if (isSubcomponent) {
        return [
          {
            type: "addMany",
            destination: `packages/components/${src}/{{pascalCase parentComponentName}}/subcomponents/{{pascalCase componentName}}`,
            base: "plop-templates/basic-component/src",
            templateFiles: "plop-templates/basic-component/src/**/*.hbs",
          },
          {
            type: "addMany",
            destination: `packages/components/${src}/{{pascalCase parentComponentName}}/subcomponents/{{pascalCase componentName}}/_docs`,
            base: "plop-templates/basic-component/docs",
            templateFiles:
              "plop-templates/basic-component/docs/**/!(*.mdx.hbs)",
          },
        ]
      }

      return [
        {
          type: "addMany",
          destination: `packages/components/${src}/{{pascalCase componentName}}`,
          base: "plop-templates/basic-component/src",
          templateFiles: "plop-templates/basic-component/src/**/*.hbs",
        },
        {
          type: "addMany",
          destination: `packages/components/${src}/{{pascalCase componentName}}/_docs`,
          base: "plop-templates/basic-component/docs",
          templateFiles: "plop-templates/basic-component/docs/**/*.hbs",
        },
        {
          type: "modify",
          path: `packages/components/${src}/index.ts`,
          transform: (content, answers) => {
            const componentName = plop.getHelper("pascalCase")(
              answers.componentName
            )
            const exportStatement = `export * from "./${componentName}"`

            if (content.includes(exportStatement)) return content

            return `${content.trim()}\n${exportStatement}\n`
          },
        },
      ]
    },
  })
}
