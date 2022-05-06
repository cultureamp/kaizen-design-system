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
    ],
    actions: [
      // Package
      {
        type: "addMany",
        destination: "packages/{{kebabCase componentName}}",
        base: "plop-templates/basic-component",
        templateFiles: "plop-templates/basic-component/**/*.hbs",
      },
      // Site docs
      {
        type: "addMany",
        destination: "site/docs/components",
        base: "plop-templates/site/docs/components",
        templateFiles: "plop-templates/site/docs/components/*.hbs",
      },
    ],
  })
}
