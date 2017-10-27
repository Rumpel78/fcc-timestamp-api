var express = require('express')
var dateFormat = require('dateformat-light');

var app = express()
var port = process.env.PORT || 8080;

function getDates(unknownDateType){ 
  var date = new Date(+unknownDateType*1000);
  if(isNaN(date.getTime())) //Date is not a unix timestamp
  {
      var date  = new Date(unknownDateType);
  }
  if(isNaN(date.getTime())) //Date is invalid
  {
      return { unix: null, natural: null }
  }
  var naturalDate = dateFormat(date, "mmmm dd, yyyy");
  return { unix: date.getTime()/1000, natural: naturalDate }
}



app.use(express.static('public'));

app.get('/:time', function (req, res) {
    var result = getDates(req.params.time)
    res.send(JSON.stringify(result));
})

app.listen(port, function () {
  console.log('Example app listening on port '+port)
})
