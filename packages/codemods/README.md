# About 
Kaizen codemods are a collection of codemods to allow teams move quickly on changes with minimal stress and downtime. When you might need this tool: 
* If your draft components point to the old location
* The design system team have made breaking changes to a component but you need time to migrate

## Install
Install globally to use on CLI:
`yarn global add @kaizen/codemods`

You can now run `kaizen-codemods` to use this tool.

## Features
Run `kaizen-codemods --help` to see all options
| Command      | Description |
| ----------- | ----------- |
| move-drafts  | A once-off operation that will move all imports of draft components to their new location.       |
| bless   | In progress - Component meets the requirements of a core Kaizen component.       |
| curse   | In progress - Breaking changes have been made to a core component. This command changes core imports to a legacy location   |

### Move drafts
Move drafts is a once-off operation that moves all draft components that currently exist within core Kaizen to their separate package. Running `kaizen-codemods move-drafts 'your-repo'` will update all imports in React and Elm for you. Note that you will need to manually update elm.json projects yourself (if applicable).

### Bless
In progress. When a component is "blessed" or graduated from a draft component to a core component, `bless` will change all imports for you in React and Elm.

### Curse
In progress. When a component is `cursed` (previously a core component but many large breaking changes)
