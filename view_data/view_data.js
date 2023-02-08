const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html')
});

app.use(express.static(__dirname + '/static', {
    setHeaders: function (res, path) {
      if (path.endsWith(".css")) {
        res.set("Content-Type", "text/css");
      }
    }
}));

app.listen(8004);
