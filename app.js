var app = require('express')(),
    port = process.env.PORT || 3000;


app.get('/', function (req, res) {
    res.send("Hello World from the team PhotoDesk!");
});


var server = app.listen(port, function () {
    var host = server.address().address;
    var mPort = server.address().port;

    console.log("The PhotoDesk is starting up on : http://", host,mPort);
})