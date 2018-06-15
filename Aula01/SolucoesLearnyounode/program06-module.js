module.exports = function (fileDir, extension, callback) {
  var fs = require('fs')
  var path = require('path')
  fs.readdir(fileDir, function (err, list) {
    if (err) return callback(err)
    var data = []
    list.forEach(function(file) {
      if (path.extname(file) === '.' +extension) {
          data.push(file)
      }
  })
    callback(null, data)
  })
}
