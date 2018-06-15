// program03a.js
var fs   = require('fs')
var file = process.argv[2]

var contents = fs.readFileSync(file)
var lines    = contents.toString().split('\n').length - 1
console.log(lines)