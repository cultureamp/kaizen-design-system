module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
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
        name: "isAIO",
        message: "Add this component to the @kaizen/components?",
        default: true,
      },
      {
        type: "confirm",
        name: "isAIOFuture",
        message: "Is this a future component?",
        when: answers => answers.isAIO,
        default: false,
      },
      {
        type: "input",
        name: "packageName",
        message: "What is the package name?",
        when: answers => answers.isAIO === false,
        default: ({ componentName, isSubcomponent, parentComponentName }) =>
          plop.getHelper("kebabCase")(
            isSubcomponent ? parentComponentName : componentName
          ),
      },
    ],
    actions: ({ isSubcomponent, isAIO, isAIOFuture }) => {
      if (isAIO) {
        const src = isAIOFuture ? "src/__future__" : "src"

        if (isSubcomponent) {
          return [
            {
              type: "addMany",
              destination: `packages/components/${src}/{{pascalCase parentComponentName}}/subcomponents`,
              base: "plop-templates/basic-component/src",
              templateFiles: "plop-templates/basic-component/src/**/*.hbs",
              data: {
                overrideClassNameSrc: "~types/OverrideClassName",
              },
            },
          ]
        }

        return [
          {
            type: "addMany",
            destination: `packages/components/${src}/{{pascalCase componentName}}`,
            base: "plop-templates/basic-component/src",
            templateFiles: "plop-templates/basic-component/src/**/*.hbs",
            data: {
              overrideClassNameSrc: "~types/OverrideClassName",
            },
          },
          {
            type: "addMany",
            destination: `packages/components/${src}/{{pascalCase componentName}}/_docs`,
            base: "plop-templates/basic-component/docs",
            templateFiles: "plop-templates/basic-component/docs/**/*.hbs",
            data: {
              packageName: "components",
              storybookDir: isAIOFuture
                ? "../../../../../../storybook"
                : "../../../../../storybook",
            },
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
      }

      if (isSubcomponent) {
        return [
          {
            type: "addMany",
            destination:
              "packages/{{kebabCase packageName}}/src/{{pascalCase parentComponentName}}/components/{{pascalCase componentName}}",
            base: "plop-templates/basic-component/src",
            templateFiles: "plop-templates/basic-component/src/**/*.hbs",
            data: {
              overrideClassNameSrc: "@kaizen/component-base",
            },
          },
        ]
      }

      return [
        {
          type: "addMany",
          destination:
            "packages/{{kebabCase packageName}}/src/{{pascalCase componentName}}",
          base: "plop-templates/basic-component/src",
          templateFiles: "plop-templates/basic-component/src/**/*.hbs",
          data: {
            overrideClassNameSrc: "@kaizen/component-base",
          },
        },
        {
          type: "addMany",
          destination: "packages/{{kebabCase packageName}}/docs",
          base: "plop-templates/basic-component/docs",
          templateFiles: "plop-templates/basic-component/docs/**/*.hbs",
          data: {
            storybookDir: "../../../storybook",
          },
        },
        {
          type: "addMany",
          destination: "packages/{{kebabCase packageName}}",
          base: "plop-templates/basic-component",
          templateFiles: "plop-templates/basic-component/*.hbs",
          skipIfExists: true,
        },
        {
          type: "modify",
          path: "packages/{{kebabCase packageName}}/index.ts",
          transform: (content, answers) => {
            const componentName = plop.getHelper("pascalCase")(
              answers.componentName
            )
            const exportStatement = `export * from "./src/${componentName}"`

            if (content.includes(exportStatement)) return content

            return `${content.trim()}\n${exportStatement}\n`
          },
        },
      ]
    },
  })
}
