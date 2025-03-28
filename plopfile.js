module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setHelper('preCurly', (t) => `{${t}`)

  plop.setGenerator('basic component', {
    description: 'Generate a basic component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name?',
      },
      {
        type: 'confirm',
        name: 'isSubcomponent',
        message: 'Is this a subcomponent?',
        default: false,
      },
      {
        type: 'input',
        name: 'parentComponentName',
        message: 'What is the parent component name?',
        when: (answers) => answers.isSubcomponent,
      },
      {
        type: 'confirm',
        name: 'isNext',
        message: "Is this a 'next' component?",
        default: false,
      },
    ],
    actions: ({ isSubcomponent, isNext, componentName, parentComponentName }) => {
      const src = isNext ? 'src/__next__' : 'src'
      const componentNamePascal = plop.getHelper('pascalCase')(componentName)

      if (isSubcomponent) {
        const parentComponentNamePascal = plop.getHelper('pascalCase')(parentComponentName)

        return [
          {
            type: 'addMany',
            destination: `packages/components/${src}/{{pascalCase parentComponentName}}/subcomponents/{{pascalCase componentName}}`,
            base: 'plop-templates/basic-component/src',
            templateFiles: 'plop-templates/basic-component/src/**/*.hbs',
          },
          {
            type: 'addMany',
            destination: `packages/components/${src}/{{pascalCase parentComponentName}}/subcomponents/{{pascalCase componentName}}/_docs`,
            base: 'plop-templates/basic-component/docs',
            templateFiles: 'plop-templates/basic-component/docs/**/!(*.mdx.hbs)',
            data: {
              storyTitle: `Components/${parentComponentNamePascal}/${componentNamePascal}`,
            },
          },
        ]
      }

      return [
        {
          type: 'addMany',
          destination: `packages/components/${src}/{{pascalCase componentName}}`,
          base: 'plop-templates/basic-component/src',
          templateFiles: 'plop-templates/basic-component/src/**/*.hbs',
        },
        {
          type: 'addMany',
          destination: `packages/components/${src}/{{pascalCase componentName}}/_docs`,
          base: 'plop-templates/basic-component/docs',
          templateFiles: 'plop-templates/basic-component/docs/**/*.hbs',
          data: {
            storyTitle: `Components/${componentNamePascal}`,
          },
        },
        {
          type: 'modify',
          path: `packages/components/${src}/index.ts`,
          transform: (content) => {
            const exportStatement = `export * from "./${componentNamePascal}"`

            if (content.includes(exportStatement)) return content

            return `${content.trim()}\n${exportStatement}\n`
          },
        },
      ]
    },
  })
}
