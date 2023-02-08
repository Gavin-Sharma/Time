import mysql.connector
import pandas as pd
from pymongo import MongoClient as pm

def get_mean_data():
    # connect to MySQL
    cnx = mysql.connector.connect(user='root', password='root',
                                host='mysql_db', database='project1')

    # retrieve data from MySQL
    df = pd.read_sql("SELECT * FROM project1.times", cnx)

    # calculate mean for each column
    exercise_mean = df['exercise'].mean()
    homework_mean = df['homework'].mean()
    sleep_mean = df['sleep'].mean()
    phone_mean = df['phone'].mean()
    family_mean = df['family'].mean()
    school_mean = df['school'].mean()

    # connect to Mongo
    client = pm("mongodb://root:root@mongo_db:27017/")
    db = client["analytics"]
    collection = db["analytics_mean"]

    # write data to Mongo
    result = collection.update_one({}, {
        "$set": {
            "exercise_mean": exercise_mean,
            "homework_mean": homework_mean,
            "sleep_mean": sleep_mean,
            "phone_mean": phone_mean,
            "family_mean": family_mean,
            "school_mean": school_mean
        }
    }, upsert=True)

    return result

while True:
    get_mean_data()