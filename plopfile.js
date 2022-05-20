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
        type: "input",
        name: "packageName",
        message: "What is the package name?",
        default: ({ componentName, isSubcomponent, parentComponentName }) =>
          plop.getHelper("kebabCase")(
            isSubcomponent ? parentComponentName : componentName
          ),
      },
    ],
    actions: ({ isSubcomponent }) => {
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
