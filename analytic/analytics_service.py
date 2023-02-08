import mysql.connector
import pandas as pd
from pymongo import MongoClient as pm


def get_stat_data():
    # connect to MySQL
    cnx = mysql.connector.connect(user='root', password='root',
                                host='mysql_db', database='project1')

    # retrieve data from MySQL
    df = pd.read_sql("SELECT * FROM projecg1.times", cnx)

    # calculate statistics data
    minimum = df.min()
    maximum = df.max()
    average = df.mean()
    mean = df.mean()
    mode = df.mode().iloc[0]
    std = df.std()

    # connect to Mongo
    client = pm("mongodb://localhost:27017/")
    db = client["project1"]
    collection = db["times"]

    # write data to Mongo
    result = collection.insert_one({
        "minimum": minimum.to_dict(),
        "maximum": maximum.to_dict(),
        "average": average.to_dict(),
        "mean": mean.to_dict(),
        "mode": mode.to_dict(),
        "standard_deviation": std.to_dict()
    })

    return result
