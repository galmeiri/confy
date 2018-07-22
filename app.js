const fs = require("fs");

const loadConfig = (path) => {
  configPath = path || `${process.argv[1].substr(0, process.argv[1].lastIndexOf("."))}.config.json`;
  if (!configPath) {
    throw new Error(`Cannot find config file in ${configPath}`);
  }

  json = JSON.parse(fs.readFileSync(configPath));
  
  for (key in json){
    if (json[key] && typeof(json[key]) == "string" && json[key].match(/^\$[A-Z\_0-9]+$/)){
      if (process.env[json[key].substr(1)]) {
        json[key] = process.env[json[key].substr(1)];
      }
    }
  }

  return json
}

module.exports = loadConfig;