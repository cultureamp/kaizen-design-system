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
        message: "Add this component to the AIO?",
        default: true,
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
    actions: ({ isSubcomponent, isAIO }) => {
      if (isAIO) {
        if (isSubcomponent) {
          return [
            {
              type: "addMany",
              destination:
                "packages/components/src/{{pascalCase parentComponentName}}/subcomponents",
              base: "plop-templates/aio-component",
              // We only want the base src files and not any subfolders
              templateFiles: "plop-templates/aio-component/*.hbs",
            },
          ]
        }

        return [
          {
            type: "addMany",
            destination: "packages/components/src/{{pascalCase componentName}}",
            base: "plop-templates/aio-component",
            templateFiles: "plop-templates/aio-component/**/*.hbs",
            data: {
              packageName: "components",
            },
          },
          {
            type: "modify",
            path: "packages/components/src/index.ts",
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
              "packages/{{kebabCase packageName}}/src/{{pascalCase parentComponentName}}/components",
            base: "plop-templates/basic-component/src",
            templateFiles: "plop-templates/basic-component/src/**/*.hbs",
          },
        ]
      }

      return [
        {
          type: "addMany",
          destination: "packages/{{kebabCase packageName}}",
          base: "plop-templates/basic-component",
          templateFiles: "plop-templates/basic-component/**/*.hbs",
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
