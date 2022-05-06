module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  const TEMPLATE_DIR__BASIC_COMPONENT = "plop-templates/basic-component"
  const TEMPLATE_DIR__SITE__COMPONENT_DOCS =
    "plop-templates/site/docs/components"
  const PACKAGE_DIR = "packages/{{kebabCase componentName}}"
  const SITE_DIR__COMPONENT_DOCS = "site/docs/components"

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
      // Site docs (not in package)
      {
        type: "add",
        path: `${SITE_DIR__COMPONENT_DOCS}/{{kebabCase componentName}}.mdx`,
        templateFile: `${TEMPLATE_DIR__SITE__COMPONENT_DOCS}/component-name.mdx.hbs`,
      },
    ],
  })
}
