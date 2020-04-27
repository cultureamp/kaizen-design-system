# About 
Kaizen codemods are a collection of codemods to allow teams to quickly. These tools will empower teams to 
move quickly on changes with minimal stress and downtime.

## Install
Install globally to use on CLI:
`yarn global add '@kaizen/codemods'`

## Features
Run `kaizen-codemods --help` to see all options
| Command      | Description |
| ----------- | ----------- |
| move-drafts  | A once-off operation that will move all imports to draft component in Kaizen to their new location.       |
| bless   | In progress - Component meets the requirements of a core Kaizen component.       |
| curse   | In progress - Breaking changes have been made to a core component. This command changes core imports to a legacy location   |
