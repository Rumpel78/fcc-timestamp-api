var express = require('express')
var dateFormat = require('dateformat-light');

var app = express()
var port = process.env.VIRTUAL_PORT || 8080;

function getDates(unknownDateType) {
    var date = new Date(+unknownDateType * 1000);
    if (isNaN(date.getTime())) //Date is not a unix timestamp
    {
        var date = new Date(unknownDateType);
    }
    if (isNaN(date.getTime())) //Date is invalid
    {
        return { unix: null, natural: null }
    }
    var naturalDate = dateFormat(date, "mmmm dd, yyyy");
    return { unix: date.getTime() / 1000, natural: naturalDate }
}


app.set('view engine', 'pug');

app.get('/', function (req, res) {
    var baseUrl = req.protocol + '://' + req.hostname + ':' + port;

    var mainDomain = req.hostname.substr(req.hostname.indexOf('.') + 1);
    var baseHome = req.protocol + '://' + mainDomain + ':' + port

    res.render('index', { host: baseUrl, home: baseHome });
});

app.get('/:time', function (req, res) {
    var result = getDates(req.params.time)
    res.send(JSON.stringify(result));
})

app.listen(port, function () {
    console.log('Example app listening on port ' + port)
})
