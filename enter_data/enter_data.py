from typing import List, Dict
from flask import Flask, render_template, request, redirect
import mysql.connector
import json
import pymongo

app = Flask(__name__)



# HOMEPAGE
@app.route('/', methods=["POST", "GET"])
def homepage():
    if request.method == "POST":
        
        # grab inputs
        exercise = request.form["exercise"]
        homework = request.form["homework"]
        sleep = request.form["sleep"]
        phone = request.form["phone"]
        family = request.form["family"]
        school = request.form["school"]

        # info to connect to mysql
        config = {
            'user': 'root',
            'password': 'root',
            'host': 'mysql_db',
            'port': '3306',
            'database': 'project1'
        }

        # connect to mysql and make cursor
        connection = mysql.connector.connect(**config)
        cursor = connection.cursor()
        
        # insert the inputs
        sql = "INSERT INTO times (exercise, homework, sleep, phone, family, school) VALUES (%s, %s, %s, %s, %s, %s)"
        values = (exercise, homework, sleep, phone, family, school)
        
        # run
        cursor.execute(sql, values)
        connection.commit()
        cursor.close()
        connection.close()

        return redirect("/")
    
    else:
        # if its not a post request
        return render_template("index.html")

def store_data_in_mongodb(data):
    # Connect to MongoDB
    client = pymongo.MongoClient("mongodb://root:root@mongodb:27017/")
    db = client["project1"]
    collection = db["times"]
    
    # Insert data into the collection
    collection.insert_one(data)

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
