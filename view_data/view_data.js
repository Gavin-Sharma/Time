const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html')
});

app.listen(8004);
