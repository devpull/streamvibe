# markup.start

## vscode linting and formatting configuration:  
Install "Stylelint" extension.  
Install "Biomejs" extension.  
Add keybindings to your key map.
```json
{
  "key": "alt+shift+f",
  "command": "stylelint.executeAutofix",
  "when": "editorTextFocus && editorLangId == 'css' && config.workspaceKeybindings.allowStylelintKeybinding.enabled"
},
{
  "key": "alt+shift+f",
  "command": "stylelint.executeAutofix",
  "when": "editorTextFocus && editorLangId == 'scss' && config.workspaceKeybindings.allowStylelintKeybinding.enabled"
},
{
  "key": "alt+shift+f",
  "command": "stylelint.executeAutofix",
  "when": "editorTextFocus && editorLangId == 'less' && config.workspaceKeybindings.allowStylelintKeybinding.enabled"
}
```
Add to vscode settings(or add using gui):
```json
"stylelint.validate": "scss"
```
Add to .vscode folder of the project, to settings.json file:
```json
{
  "scss.validate": false,
  "css.validate": false,
  "less.validate": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "workspaceKeybindings.allowStylelintKeybinding.enabled": true
}
```
## Commands
- dev  
- build  
- preview  
- format  
- format:fix  
- lint  
- lint:fix  
- check (fix all except scss & css)  
- stylelint
- stylelint:fix