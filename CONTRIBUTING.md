# Contributing

Kaizen Design System follows a federated, open-source model. All teams contribute Issues and Pull Requests to grow Kaizen together.

## Setup

To develop Kaizen Component Library or Kaizen Site locally, run the following command to get started:

```
yarn install
```

## Develop Kaizen Site

To develop Kaizen Site:

`yarn gatsby develop`

Visit: <http://localhost:8000>.

Kaizen Site documentation is written using [Markdown syntax](https://daringfireball.net/projects/markdown/syntax).

## Develop Kaizen Component Library

We use [Storybook](https://github.com/storybooks/storybook) to develop React and Elm components locally. All Kaizen Component Library components have accompanying stories in Storybook.

To develop Kaizen components, use storybook:

`yarn storybook`

### Quality and reviews

Every component needs:

- A design review from a designer
- Basic level of unit tests
- Communications: share your new component or changes at practice meetings and on Slack

To update a component:

- Ask for a review from design systems advocates, Design Systems Team, or someone in your team
- Notify the front-end engineering practice of any possible breaking changes
- Notify the QA practice of any possible breaking changes

### Browser and device support

To learn more about what browsers and devices we support in Kaizen Component Library, Culture Amp employees can see [the Browser Support wiki page](https://cultureamp.atlassian.net/wiki/spaces/Prod/pages/1572948/Browser+Support+and+Stats).

### Local development with other front-end codebases

To strengthen the Kaizen Design System, we encourage engineers to take a component-first development approach. By concentrating on developing Kaizen components in Storybook, we are likely to improve the API design and achieve good separation of concerns, avoiding components tightly coupled to specific applications. If, however, you want to test a component in the context of another front-end codebase, you can "symlink" your local version of `@cultureamp/kaizen-component-library` with your other front-end codebase.

**Step 1**: Make your local copy of `@cultureamp/kaizen-component-library` available.

```sh
# Navigate to code source
$ cd ./packages/kaizen-component-library

# Register package for linking
$ yarn link

# Build in watch mode
$ yarn build:watch
```

**Step 2**: Link `@cultureamp/kaizen-component-library` to your other front-end codebase.

```sh
# Navigate to code source
$ cd code/cultureamp/YOUR_FRONT_END_CODEBASE

# Link repo to locally registered package
$ yarn link @cultureamp/kaizen-component-library
```

Your local Kaizen changes will now show in your other front-end codebase.

**Step 3.**: Unlink

When you are done, unlink the package:

`yarn unlink @cultureamp/kaizen-component-library`

You can also clean up generated files:

`yarn clean`

Learn more about [Yarn link](https://yarnpkg.com/lang/en/docs/cli/link/)

### Pull Requests and deployment

To deploy Kaizen Component Library changes, your Pull Request (PR) title must follow the [Conventional Commits format](https://www.conventionalcommits.org/en/v1.0.0-beta.2/).

For example, a PR title of `feat(kaizen): add X props to X component` might create a **major** release, bumping the version from 16.2.1 to 17.0.0.
 
For another example, a PR title of `feat(kaizen): add a new Toggle component` might create a **minor** release, bumping the version from 16.0.0 to 16.1.0).

Finally, a PR title of `fix(kaizen): fix the focus styling on our button component` might create a **patch** release, bumping the version from 16.0.0 to 16.0.1).

To see your deployed Kaizen Component Library changes in your repo, you'll need to bump the version of the Kaizen package used. You might edit the `package.json` file to change the package version or run `yarn upgrade --latest @cultureamp/kaizen-component-library`.

## Component design

**Naming things is hard!** Talk to someone in Design Systems Team for help on names that work for designers and engineers, as well as respect industry guidelines like W3C specifications, popular frameworks, and so on.

- Name of a component
- Name of props e.g. "mood"–ideally the possible values would be suggested by the prop name. Avoid "type" or "variant" where possible.
- Name of prop values e.g. "affirmative", "destructive"
- Name of sizing options e.g. small/medium/large

**Stand on the shoulders of giants!** Find 3 examples of someone who's done this before. For example, try [Shopify's Polaris Design System](https://polaris.shopify.com/components/get-started), [Atlassian's Design System](https://www.atlassian.design/), [Salesforce's Lightning Design System](https://www.lightningdesignsystem.com/guidelines/overview/), [Ant Design's System](https://ant.design/), or [Google's Material Design](https://material.io/design/).You might find inspiration for design guidelines, prop names, and implementation details. Look for a component library or framework that's already built what you're considering.

### Implementation considerations

You might need to consider:

- Will any HTML, such as a link be present? For example, a link in a checkbox label, or a button in a notification paragraph.
- Will there be any text wrapping, breaking, or truncating for user-generated content, such as URLs/emails?
- Does there need to be right-to-left (RTL) options for localization/internationalization?
- Are there any possible data confidentiality or security concerns?
- Does there need to be motion?
- How is performance? Consider latency, size, perceived performance, compilation/minification, caching, CDNs, and delivery.
- Is there likely to be style inheritance problems with legacy styles, such as Bootstrap?
- How responsive is it?
- How accessible is it? Culture Amp employees can check out [Web Accessibility (Current Compliance, Going Forward, Statement and Answers for Customers)](https://cultureamp.atlassian.net/wiki/spaces/Prod/pages/428572998/Web+Accessibility).

### API Design

A component might be made up of primitives.

**Components:**

For example, Input Field, which might have different states like focus or disabled.

**Primitives:**

For example, Input, Label, and Validation message. Together, these primitives make up the Input Field component. If the component doesn't do what you need, please use the primitives and let Design Systems Team know so the components can be reconsidered. 

**Boilerplate/templates:**

Sometimes a component doesn't make sense. As an example, our Workflow pattern template is not a component.

#### States

There might be states on more than 1 axis. In addition to default, hover, focus, active, and disabled states, a component might have other kinds of states such as a checkbox being checked, unchecked or mixed, or an input being readonly.

#### Props: noMargin

It is common for components to come with default margins surrounding them and yet these margins can cause problems in app, given surrounding content. For all components that come with default spacing, we provide a `noMargin` boolean prop to turn the default margins off as needed.

#### Props: sizes

Use "Small", "Medium", "Large": in code, `sm`, `md`, `lg`. For more information, see [Sizing guidelines](https://cultureamp.design/guidelines/sizing).

#### Props: themes

For variants that only change visual appearance when used in specific areas, use a theme prop. For example, `theme="default"` or `theme="zen"`.

#### Responsive design

There are a number of options for how to implement responsive layouts included in design specs for some components.

You might be tempted to use JavaScript to respond to viewport size changes and alter the DOM to switch between layouts in response to viewport changes. An NPM package like react-media (already in use in places) makes it very easy to write a React render function that renders different HTML elements, or applies different classes to HTML elements so that they match different CSS styles.

Where practical, we wish to avoid this.

For a generally more performant, reliable result, leverage the native support for CSS media queries in browsers to apply different styles based on viewport size (or other factors).

The goal, therefore, should be to have your React (or Elm) render function produce a single DOM structure, regardless of viewport size. Then, in your CSS, use @media rules to vary the styles depending on the viewport size. With creative use of CSS flexbox features (e.g. switching between flex-direction: row and flex-direction: column), and as a last resort including two versions of the view in the DOM and switching between them with display: none, you can achieve almost any responsive layout without needing to use JavaScript.

This will often become trickiest when nested components are involved: how can you use the “large” version of a button at one viewport size, and switch to a “small” version of the same button at another viewport size? If the version of the button is controlled with a JavaScript prop, how can you change it without using JavaScript? One option is to control the size of the nested component (the button in this example) in your parent component, by rendering a container element whose size you control in your CSS, and then using a button variant that will fill the width of that container. This of course makes your parent component responsible for the button dimensions, however, which may be difficult to implement without duplicating one or more standard button widths in our codebase. Another option is the aforementioned “last resort”: render both buttons and control which one is visible on the page with display: none.

All that said, where avoiding the use of JavaScript makes the implementation significantly more difficult to maintain, test or reason about, we may still choose to implement a responsive layout with JavaScript.

## Want to learn more about great components?

- [Documenting Components by Nathan Curtis](https://medium.com/eightshapes-llc/documenting-components-9fe59b80c015)
- [Component Design Guidelines by Nathan Curtis](https://medium.com/eightshapes-llc/component-design-guidelines-eca706100e7c)
- [Size in Design Systems by Nathan Curtis](https://medium.com/eightshapes-llc/size-in-design-systems-64f234aec519)

