
// node.js is beneficial because it unifies javascript language and data format(JSON)
//require a file system, grab the fs pacage to handle read/write

//Initializes the project and accepts all default modules within in the created package.json
npm init


// core node package for reading and writing files
var fs = require('fs');

// .gitignore file to tell git not to track these files and won't be commited to GITHUB
//keep info that needs to be secret... secret
node_modules
.DS_Store
.env
