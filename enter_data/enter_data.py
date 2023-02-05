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

        # connect to the MongoDB db and collection
        myclient = pymongo.MongoClient("mongodb://mongo:27017/")
        mydb = myclient["project1"]
        mycol = mydb["times"]
        
        # connect to MySQL
        connection = mysql.connector.connect(**config)
        cursor = connection.cursor()

        # query the data from the MySQL db
        cursor.execute("SELECT * FROM times")
        rows = cursor.fetchall()

        # iterate over the rows and insert into MongoDB
        for row in rows:
            mycol.insert_one({
                "exercise": row[0],
                "homework": row[1],
                "sleep": row[2],
                "phone": row[3],
                "family": row[4],
                "school": row[5]
            })

        cnx.close()
        client.close()

        return redirect("/")
    
    else:
        # if its not a post request
        return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
