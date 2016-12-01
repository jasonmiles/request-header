var express = require('express')
var app = express()

var port = process.env.PORT || 8080;

app.get('/api/whoami', function(req, res) {
  var ipaddress = req.ip
  var lang = req.headers["accept-language"].split(',')[0]
  var software = req.headers["user-agent"].split('(')[1].split(')')[0]
  res.send({ipaddress: ipaddress, language: lang, software: software})
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
