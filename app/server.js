// CREATE express.js app
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 9000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var api_url = '/api/v1/';

//Name changed from default
app.use(api_url+ "add-profile", function() {
    console.log('got a request to add a profile')
});
app.use(api_url+ "identify-profile", function() {

});

app.use("/",function(request, response) {
    response.render('index')
});

// Route to static content
app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
    console.log('Face recognition app is running at localhost:' + app.get('port'))
});
