# confy
A simple and smart config loader

The package takes a JSON config file and returns a parsed config object. 
Confy knows to automatically parse values with $ sign followed by capital letters from the process environment.

[![NPM Version][npm-image]][npm-url]


## Simple usage
```js
const confy = require("confy");  
const config = confy("app.config.json"); // Default config file name is equivalent to <mainModuleName>.config.json. There is no need to specify this path.
```

## Installation
```js
npm install confy --save
```

## Usage examples
"app.config.json" contains the following JSON:
```
{
    "db": {
        "host": "$DATABASE_HOST",
        "username": "$DATABASE_USER",
        "password": "$DATABASE_PASSWORD",
    },
    "safe": "I am just a regular text"
}
```
Where $DATABASE_HOST, $DATABASE_USER, $DATABASE_PASSWORD will be set in the process env.

[npm-image]: https://img.shields.io/badge/npm-v1.0.0-blue.svg
[npm-url]: https://www.npmjs.com/package/confy
