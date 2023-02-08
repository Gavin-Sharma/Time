var db = connect("mongodb://root:root@mongo_db:27017/analytics");

db.createCollection("analytics");

db.analytics.insertOne({
  exercise_mean: 0,
  homework_mean: 0,
  sleep_mean: 0,
  phone_mean: 0,
  family_mean: 0,
  school_mean: 0
});
