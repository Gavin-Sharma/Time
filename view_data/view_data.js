const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = "mongodb://root:root@mongo_db:27017/";
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

app.get('/data', function(req, res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("analytics");
        dbo.collection("analytics_mean").findOne({}, function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
});

app.listen(8004);
