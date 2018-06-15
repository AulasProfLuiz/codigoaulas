var program = require('./program06-module.js')

var folder = process.argv[2]
var ext    =  process.argv[3]

program(folder, ext, function (err, data) {
  if (err) return err
  data.forEach(data => console.log(data))
})
