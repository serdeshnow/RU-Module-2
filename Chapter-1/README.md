# Project Setting. Installing

npx create-react-app app

\>\> cd app
\>\> npm start

# Project Setting. EditorConfig

### [https://editorconfig.org/]

### ./.editorconfig :

root = true

[*]
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
charset = utf-8
indent_style = tab
indent_size = 2

# Project setting. Package.json

### ./app/package.json :

"eslintConfig": {
"extends": [
"react-app",
"react-app/jest",

<!-- Install npm i eslint-config-prettier eslint-plugin-prettier prettier -->

"prettier"
],
"plugins": [
"prettier"
]
},

# Project setting. Prettier

### [https://prettier.io/docs/en/options]

### ./app/.prettierrc.json :

{
"printWidth": 90,
"tabWidth": 2,
"useTabs": true,
"semi": true,
"singleQuote": false,
"trailingComma": "all"
}

# Making project template.
