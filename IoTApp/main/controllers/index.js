console.log("hello world")
const express = require("express")
const app = express()
const path = require("path")


var server = app.listen(3000,function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
//app.use(express.static(path.join(__dirname, 'views')));
// routes
app.use('/',require('../routes/router_front_end'))
