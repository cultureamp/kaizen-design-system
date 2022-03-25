module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  const TEMPLATE_DIR__BASIC_COMPONENT = "plop-templates/basic-component"
  const PACKAGE_DIR = "packages/{{kebabCase componentName}}"

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
      // Package root
      {
        type: "add",
        path: `${PACKAGE_DIR}/index.ts`,
        templateFile: `${TEMPLATE_DIR__BASIC_COMPONENT}/index.ts.hbs`,
      },
      {
        type: "add",
        path: `${PACKAGE_DIR}/package.json`,
        templateFile: `${TEMPLATE_DIR__BASIC_COMPONENT}/package.json.hbs`,
      },
      {
        type: "add",
        path: `${PACKAGE_DIR}/tsconfig.dist.json`,
        templateFile: `${TEMPLATE_DIR__BASIC_COMPONENT}/tsconfig.dist.json.hbs`,
      },
      // docs
      {
        type: "add",
        path: `${PACKAGE_DIR}/docs/{{pascalCase componentName}}.stories.tsx`,
        templateFile: `${TEMPLATE_DIR__BASIC_COMPONENT}/docs/ComponentName.stories.tsx.hbs`,
      },
      // src
      {
        type: "add",
        path: `${PACKAGE_DIR}/src/{{pascalCase componentName}}/{{pascalCase componentName}}.scss`,
        templateFile: `${TEMPLATE_DIR__BASIC_COMPONENT}/src/ComponentName/ComponentName.scss.hbs`,
      },
      {
        type: "add",
        path: `${PACKAGE_DIR}/src/{{pascalCase componentName}}/{{pascalCase componentName}}.spec.tsx`,
        templateFile: `${TEMPLATE_DIR__BASIC_COMPONENT}/src/ComponentName/ComponentName.spec.tsx.hbs`,
      },
      {
        type: "add",
        path: `${PACKAGE_DIR}/src/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx`,
        templateFile: `${TEMPLATE_DIR__BASIC_COMPONENT}/src/ComponentName/ComponentName.tsx.hbs`,
      },
      {
        type: "add",
        path: `${PACKAGE_DIR}/src/{{pascalCase componentName}}/index.ts`,
        templateFile: `${TEMPLATE_DIR__BASIC_COMPONENT}/src/ComponentName/index.ts.hbs`,
      },
    ],
  })
}
