# About 
Generator is a tool to quickly build new components without needing to setup configs, storybook, etc. 

## Install
Install Yeoman first: 
`yarn global add yo`

Then install this generator: 
`yarn global add @kaizen/generator-create`

## Usage
`yo create` 
`yo create:draft`

## Help 
Q: I get an error when I run `yo` in a terminal
A: Yarn bin might not be added to your PATH. Add this to `~/.bash_profile` (or your equivalent): `export PATH="$PATH:$(yarn global bin)"`