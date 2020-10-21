# About 
Generator is a tool to quickly build new components. You have the choice of generating a React component, an Elm component, or both. At a minimum it will: 
* Set up `package.json` with helpful starting scripts
* Set up `tsconfig.dist.json` 
* Generate a folder structure that is consistent with other draft components
* Generate a basic `sass` file

Only generate code for the libraries you intend to write your component in. Adding support for another library in the future is straightforward.

## Install
Install Yeoman first: 
`yarn global add yo`

Then install this generator: 
`yarn global add @kaizen/generator-create`

If you would like to update to the latest generator:
`yarn global add @kaizen/generator-create@latest`

## Usage
1. Run the following and follow the prompts: `yo @kaizen/create:draft` 
2. Choose an appropriate name for your component. See our guide: https://cultureamp.design/components/overview/#naming-things-is-hard!
3. Select whether you'd like to generate React component, Elm component (or both)
4. Done 🎉
   
Run `yarn install` to add this new component to your workspace root. This is required before running `yarn storybook`. 

## Help 
Q: I get an error when I run `yo` in a terminal
A: Yarn bin might not be added to your PATH. Add this to `~/.bash_profile` (or your equivalent): `export PATH="$PATH:$(yarn global bin)"`

Q: I use asdf and I still get the following error `command not found: yo`
A: Try `asdf reshim`
