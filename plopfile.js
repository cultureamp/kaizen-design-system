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
        type: "input",
        name: "parentComponentName",
        message:
          "If this is a subcomponent, enter the parent component name (leave blank otherwise)",
      },
    ],
    actions: ({ parentComponentName }) => {
      if (parentComponentName) {
        return [
          {
            type: "addMany",
            destination:
              "packages/{{kebabCase parentComponentName}}/src/{{pascalCase parentComponentName}}/components",
            base: "plop-templates/basic-component/src",
            templateFiles: "plop-templates/basic-component/src/**/*.hbs",
          },
        ]
      }

      return [
        {
          type: "addMany",
          destination: "packages/{{kebabCase componentName}}",
          base: "plop-templates/basic-component",
          templateFiles: "plop-templates/basic-component/**/*.hbs",
          skipIfExists: true,
        },
        {
          type: "addMany",
          destination: "site/docs/components",
          base: "plop-templates/site/docs/components",
          templateFiles: "plop-templates/site/docs/components/*.hbs",
          skipIfExists: true,
        },
      ]
    },
  })
}
