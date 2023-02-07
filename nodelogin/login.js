const express = require('express');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser'); // middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const credentials = [ {'test': 'test'},{'admin': 'password'}];

app.get('/', function(request, response){ 
    response.sendFile(__dirname + '/static/login.html') //reposond by send a static file of index.htmls
});

app.get('/home', function(request, response){ 
    response.sendFile(__dirname + '/static/homepage.html') //reposond by send a static file of index.htmls
});

app.post('/home', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;




app.use(basicAuth({ 
    authorizer: myAuthorizer
}))

function myAuthorizer(username, password) {
    for (i of credentials){
        for (let key in i) {
            const userMatches = basicAuth.safeCompare(username, key); //this is the key in the dict
            const passwordMatches = basicAuth.safeCompare(password, i[key]); // this is the value of the dict
            if (userMatches & passwordMatches){ //check if condition and if true return and if not just continue looping
                return (userMatches & passwordMatches);
            }
        }
    }
}


    if (myAuthorizer(username, password)) {
        res.sendFile(__dirname + "/static/homepage.html")
    } else { res.send('You are not a user') }


});

app.use(express.static(__dirname + '/static', {
    setHeaders: function (res, path) {
      if (path.endsWith(".css")) {
        res.set("Content-Type", "text/css");
      }
    }
}));

app.listen(3000);