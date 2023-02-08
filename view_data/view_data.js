const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();

const url = "mongodb://root:root@mongo_db:27017/";

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get("/", async (req, res) => {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db("analytics");
    const analyticsData = await db.collection("analytics_mean").findOne({});
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Show Data</title>
          <link rel="stylesheet" href="./static/style.css">
        </head>
        <body>
          <h1>Show Data</h1>
          <div id="dataContainer">
            Exercise Mean: ${analyticsData.exercise_mean}<br>
            Homework Mean: ${analyticsData.homework_mean}<br>
            Sleep Mean: ${analyticsData.sleep_mean}<br>
            Phone Mean: ${analyticsData.phone_mean}<br>
            Family Mean: ${analyticsData.family_mean}<br>
            School Mean: ${analyticsData.school_mean}
          </div>
        </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
  }
});

app.listen(8004);
